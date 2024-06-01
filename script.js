//VARIABLES
let num1,num2;
let operator = '';
let displayArray=[];
let displayVal="";
let result;

//STATE VARIABLES
let state=0;
let resNum = false;
let oneDeci = false;

//HTML ELEMENT VARIABLES
let inputText = document.getElementById('inputText');
let numButton = document.querySelectorAll('.num-buttons');
let opButton = document.querySelectorAll('.op-buttons');
let clearButton  = document.getElementById("clearButton");
let delButton = document.getElementById("delButton");

//NUMBERS EVENT LISTENERS
    for(let i=0; i<numButton.length;i++){
        numButton[i].addEventListener('click',function () {

            if(resNum){
                operator = displayVal
                displayVal ="";
                inputText.textContent ="";
                resNum = false;
                oneDeci=false;
                state=3;
            }
            if(state==0){
                state =1
            }
            if(state==1){
                //only allows one decimal point
                if(numButton[i].value =="."){
                    if(oneDeci ==false){
                        displayVal += numButton[i].value;
                        inputText.textContent = displayVal;
                        oneDeci = true;
                    }
                }else{
                    displayVal += numButton[i].value;
                    inputText.textContent = displayVal;
                }
            }

            if(state==3){
                //only allows one decimal point
                if(numButton[i].value =="."){
                    if(oneDeci ==false){
                        displayVal += numButton[i].value;
                        inputText.textContent = displayVal;
                        oneDeci = true;
                    }
                }else{
                    displayVal += numButton[i].value;
                    inputText.textContent = displayVal;
                }
            }
       });
    }


//OPERATION BUTTONS EVENT LISTENERS
    for(let i=0; i<opButton.length;i++){
        opButton[i].addEventListener('click',function () {
            if(state==1){
                num1 = displayVal;
                state=2;
            }
            if(state == 2){
                displayVal = opButton[i].value;
                operator = opButton[i].value;
                inputText.textContent = displayVal;
                resNum=true;
            }

            if(state==3){

                if(resNum ==false){
                    num2 = displayVal;
                    num1 = operate(num1,num2,operator);
                    inputText.textContent = num1;
                }
                if(opButton !="="){
                    displayVal = opButton[i].value;
                    operator = opButton[i].value;
                    resNum = true;
                }
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
         state=0;
         resNum = false;
    });

//DELETE BUTTON EVENT LISTENER
    delButton.addEventListener("click",function(){ 
        let currentText = inputText.textContent;
        // Remove the last character
        currentText = currentText.slice(0, -1);

        inputText.textContent = currentText;
        displayVal = inputText.textContent;
     })


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

//OPERATION FUNCTIONS
function add(num1,num2){
    result = parseFloat(num1)+parseFloat(num2)
    return result.toFixed(2);
}
function subtract(num1,num2){
    result = parseFloat(num1)-parseFloat(num2);
    return result.toFixed(2);
}
function multiply(num1,num2){
    result = parseFloat(num1)*parseFloat(num2);
    return result.toFixed(2);
}
function divide(num1,num2){
    if(num2 ==0){
        alert("Nice try dumboo, you cant by  0");
        return"RESTART, DONT TRY DIVING BY 0";
    }else{
        result = parseFloat(num1)/parseFloat(num2);
        return result.toFixed(2);

    }
}
 