/*function swapToInternal(event:React.MouseEvent<HTMLElement>, openToggleMenu:(event: React.MouseEvent<HTMLElement, MouseEvent>) => void, DUMMY_DATA: {
    squareft: string;
    title: string;
    type: string;
    description: string;
    image: any;
    cost: number;
}[], setInternalContent:(value: React.SetStateAction<{
    menu: string;
    title: string;
    location: string;
    description: string;
    image: any;
}>) => void) {
    openToggleMenu(event)
    const text = document.getElementById("text-box")
    const toggle = document.querySelector(".pages-toggle")
    const carousel = toggle!.querySelectorAll(".pages-caroussel")[0]

    const inner = carousel.querySelector(".carousel-inner")
    const active = inner!.querySelector(".active")
    const name = active!.querySelector("h3")
    
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

export default swapToInternal;*/

function swapToInternal() {
    return <h1>hi</h1>
}

export default swapToInternal;