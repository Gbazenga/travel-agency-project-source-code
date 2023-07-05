import { NavigateFunction } from "react-router-dom";

function delayedConnect(path:string, event: React.MouseEvent<HTMLAnchorElement>, navigate:NavigateFunction) {
    event.preventDefault();
    const page = document.querySelector(".page-area")
    
    if(path === "Homepage"){
        const app = document.querySelector(".app-area")
        app!.classList.add("move-app")
        page!.classList.add("move-page")

        setTimeout(() => {
        navigate("/")
        }, 2000)
    }
    else{
        const selector = document.getElementById(path)
        const sameLevel = document.querySelector(".same-level-pages")

        page!.classList.add("level-page-going")
        selector!.classList.toggle("same-level-hide")
        sameLevel!.classList.add("level-page-coming")

        setTimeout(() => {
        navigate(`/${path}`)
        }, 1500)
    }
}

export default delayedConnect;