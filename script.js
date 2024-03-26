//VARIABLES
let numbers=[];
let num1;
let num2;
let operator = '';
let displayVal="";

//STATE VARIABLES
let resNum = false;
let inputNum = 0;

//HTML ELEMENT VARIABLES
let inputText = document.getElementById('inputText');
let numButton = document.querySelectorAll('.buttons');
let opButton = document.querySelectorAll('.op-buttons');


//EVENT LISTENERS
    for(let i=0; i<numButton.length;i++){
        numButton[i].addEventListener('click',function () {
            if(resNum){
                displayVal ="";
                inputText.textContent ="";
                resNum = false;
            }
                displayVal += numButton[i].value;
                inputText.textContent = displayVal;
                numbers.push(displayVal);
                inputNum++;
       });
    }

    for(let i=0; i<opButton.length;i++){
        opButton[i].addEventListener('click',function () {
            if(inputNum ==1){
                displayVal = opButton[i].value;
                inputText.textContent = displayVal;
                operator = displayVal;
                inputNum++;
                resNum=true;
            }
            if(inputNum==3){
                alert(num1,num2,operator);
                displayVal = opButton[i].value;
                inputText.textContent = displayVal;

            }
       });
    }

//FUNCTIONS
function operate(num1,num2,operator) {

    switch(operator){
        case '+':
            console.log(add(num1,num2));
            break;
        
        case '-':
            console.log(subtract(num1,num2));
            break;
        case '*':
            console.log(multiply(num1,num2));
            break;
            
        case '/':
            console.log(divide(num1,num2));
            break;

    }
}

function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
