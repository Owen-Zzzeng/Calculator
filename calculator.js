let display = document.getElementById("display");
let history = document.getElementById("history");
function addToDisplay(input){
    if(display.value.length <= 9)
    {
        display.value += input
    }
    
}

function clearDisplay(){
    display.value = "";
    history.textContent = "";
}

function calculate(){
    history.textContent = display.value;
    display.value = Number(eval(display.value).toFixed(8)); // use Number to cut trailing zeros

}

function switchSign(){
    let index = null;
    let sign = null;
    let count = 0;
    for(let i = 0; i < display.value.length; i++){
        if(display.value.charAt(i) === '+' ){
            index = i;
            sign = "-";
            count ++;
        }

        if(display.value.charAt(i) === '-'){
            index = i;
            sign = "+";
            count++;
        }
    }

    if(display.value.length > 0 && index){
        if(sign){
            display.value =  display.value.substring(0, index) + sign + display.value.substring(index + 1);
        }
    }
    else if(display.value.length > 0 ){
        display.value = "-" + display.value.substring(0);
    }
}

