//get screen
const display = document.querySelector('.screen')
let aux;
let operation;


//check when btn is pressed
document.querySelector('.buttons').addEventListener('click', function(event){
    let pressed = event.target.innerText;
    controlInput(pressed);
    //console.log(pressed);
});

function showResult(){
    if(operation === 'sum'){
        display.innerText = aux + parseInt(display.innerText);
    }
    else if(operation === 'min'){
        display.innerText = aux- parseInt(display.innerText);
    }
    else if(operation === 'mult'){
        display.innerText = aux * parseInt(display.innerText);
    }
    else if(operation === 'div'){
        display.innerText = aux / parseInt(display.innerText);
    }
}

function controlInput(key){
    if(key === 'C'){
        display.innerText = '';
    }
    else if(key ==='←'){ 
        display.innerText = display.innerText.slice(0, -1);
    }
    else if(key === '='){
        showResult()
    }
    else if(key === '+') {
        operation = 'sum';
        aux = parseInt(display.innerText);
        display.innerText = '';
    }
    else if(key === '-') {
        operation = 'min';
        aux = parseInt(display.innerText);
        display.innerText = '';
    }
    else if(key === 'x') {
        operation = 'mult';
        aux = parseInt(display.innerText);
        display.innerText = '';
    }
    else if(key === '/') {
        operation = 'div';
        aux = parseInt(display.innerText);
        display.innerText = '';
    }
    else{
        display.innerText = display.innerText + event.target.innerText;
    }
}