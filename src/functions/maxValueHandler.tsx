function maxValueHandler(event: any, keyPress:string, setTopPrice: (value: React.SetStateAction<number>) => void) {
    if(isNaN(parseInt(keyPress)) && keyPress != "Backspace"){
        return;
    }
    if(event.target.value[0] === "0"){
        setTopPrice(parseInt(event.target.value.slice(1, event.target.value.length)))
        return;
    }
    if(event.target.value.length == 0 && keyPress == "Backspace"){
        setTopPrice(0)
        return;
    }
    else{
        setTopPrice(parseInt(event.target.value))
    }
}

export default maxValueHandler