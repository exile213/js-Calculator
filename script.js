//VARIABLES
let num1,num2;
let operator = '';
let displayArray=[];
let displayVal="";

//STATE VARIABLES
let state="firstNum";
let resNum = false;

//HTML ELEMENT VARIABLES
let inputText = document.getElementById('inputText');
let numButton = document.querySelectorAll('.num-buttons');
let opButton = document.querySelectorAll('.op-buttons');
let clearButton  = document.getElementById("clearButton");


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

                //assigns the value of first number and pushes into array
                num1 = displayVal;
                displayArray.push(displayVal);

                //displays operator and pushes into array
                displayVal = opButton[i].value;
                operator = opButton[i].value;
                inputText.textContent = displayVal;
                state="secondNum";
                resNum=true;
                displayArray.push(displayVal);
            }

            if(state=="secondNum" && resNum ==false){

                //assigns the value of second number, pushes into array, performs operation
                num2 = displayVal
                displayArray.push(displayVal);
                alert(operate(num1,num2,operator)); 

                //assigns and displays  next operator
                displayVal = opButton[i].value;
                operator = opButton[i].value;
                inputText.textContent = displayVal;
                state ="firstNum";
                displayArray.push(displayVal);

            }
       });
    }


//CLEAR BUTTON EVENT LISTENER
    clearButton.addEventListener('click',function(){
        //Resets everything
         num1 ='';
         num2 ='';
         operator = '';
         inputText.textContent ='';
         displayArray=[];
         displayVal="";
        state="firstNum";
        resNum = false;
    });





//FUNCTIONS
function operate(num1,num2,operator) {

    let result; 
    switch(operator){
        case '+':
            result = add(num1,num2);
            break;
        
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
            
        case '/':
            result = divide(num1,num2);
            break;

    }

    return result;
}

function add(num1,num2){
    return parseInt(num1)+parseInt(num2);
}
function subtract(num1,num2){
    return parseInt(num1)-parseInt(num2);
}
function multiply(num1,num2){
    return parseInt(num1)*parseInt(num2);
}
function divide(num1,num2){
    return parseInt(num1)/parseInt(num2);
}
 