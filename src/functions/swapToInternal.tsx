function swapToInternal(event:React.MouseEvent<HTMLElement>, openToggleMenu:(event: React.MouseEvent<HTMLElement, MouseEvent>) => void, DUMMY_DATA: {
    info: string;
    title: string;
    subtitle: string;
    description: string;
    image: any;
    cost: number;
}[], setInternalContent:(value: React.SetStateAction<{
    info: string;
    title: string;
    subtitle: string;
    description: string;
    image: any;
    cost: number;
}>) => void) {
    openToggleMenu(event)
    const text = document.getElementById("text-box")
    const toggle = document.querySelector(".pages-toggle")

    const button = event.target as HTMLElement
    const inner = button.parentElement;
    const name = inner?.children[0]
    
    const pick = DUMMY_DATA.filter((item) => {
        return item.title === name?.childNodes[0].textContent
    })
    setTimeout(() => {
        text!.classList.add("text-going")
        toggle!.classList.add("toggle-going")
    },1000)
    
    setInternalContent(pick[0])
    
    setTimeout(() => {
    const internal = document.querySelector(".internal-area")
    internal!.classList.toggle("internal-coming")
    }, 1000)
}

export default swapToInternal;
