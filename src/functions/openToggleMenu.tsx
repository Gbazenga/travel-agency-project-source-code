function openToggleMenu(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    const target = document.querySelector(".pages-toggle")
    target!.classList.toggle("toggle-show")

    const child = target!.firstChild as HTMLElement
    child.classList.toggle("show")

    const textBox = target!.previousSibling as HTMLElement
    textBox.classList.toggle("hide")
    target!.querySelectorAll("h1")[0].classList.toggle("turn")
    target!.querySelectorAll("h1")[1].classList.toggle("hide")
    
    const carrousel = target!.lastChild as HTMLElement
    carrousel.classList.toggle("show")
}

export default openToggleMenu