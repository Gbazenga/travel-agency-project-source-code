function minValueHandler(event: any, keyPress:string, setBottomPrice: (value: React.SetStateAction<number>) => void) {
    if(isNaN(parseInt(keyPress)) && keyPress != "Backspace"){
        return;
    }
    if(event.target.value[0] === "0"){
        setBottomPrice(parseInt(event.target.value.slice(1, event.target.value.length)))
        return;
    }
    if(event.target.value.length == 0 && keyPress == "Backspace"){
        setBottomPrice(0)
        return;
    }
    else{
        setBottomPrice(parseInt(event.target.value))
    }
}

export default minValueHandler;