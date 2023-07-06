function swapBack() {
    const internal = document.querySelector(".internal-area")
    internal!.classList.toggle("internal-coming")

    const text = document.getElementById("text-box")
    const toggle = document.querySelector(".pages-toggle")

    text!.classList.toggle("text-coming")
    toggle!.classList.toggle("toggle-coming")
    
    setTimeout(() => {
        text!.classList.toggle("text-going")
        toggle!.classList.toggle("toggle-going")
        text!.classList.toggle("text-coming")
        toggle!.classList.toggle("toggle-coming")
    },1500)
}

export default swapBack;