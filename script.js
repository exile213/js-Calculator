//VARIABLES
let numArray=[];
let operator = '';
let displayVal="";

//STATE VARIABLES
let state="firstNum";
let resNum = false;

//HTML ELEMENT VARIABLES
let inputText = document.getElementById('inputText');
let numButton = document.querySelectorAll('.buttons');
let opButton = document.querySelectorAll('.op-buttons');


//NUMBERS EVENT LISTENERS
    for(let i=0; i<numButton.length;i++){
        numButton[i].addEventListener('click',function () {

            if(resNum){
                displayVal ="";
                inputText.textContent ="";
                resNum = false;
            }
            if(state=="firstNum"){
                displayVal += numButton[i].value;
                inputText.textContent = displayVal;
            }

            if(state=="secondNum"){
                displayVal += numButton[i].value;
                inputText.textContent = displayVal;
            }
       });
    }


    //OPERATION BUTTONS EVENT LISTENERS
    for(let i=0; i<opButton.length;i++){
        opButton[i].addEventListener('click',function () {
            if(state=="firstNum"){
                numArray.push(displayVal);
                displayVal = opButton[i].value;
                operator = opButton[i].value;
                inputText.textContent = displayVal;
                state="secondNum";
                resNum=true;
                numArray.push(displayVal);
            }

            if(state=="secondNum" && resNum ==false){
                numArray.push(displayVal);
                alert(numArray);
                displayVal = opButton[i].value;
                operator = opButton[i].value;
                inputText.textContent = displayVal;
                state ="firstNum";
                numArray.push(displayVal);

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
 