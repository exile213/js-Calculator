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

//NUMBER BUTTONS CLICK EVENT LISTENERS
    for(let i=0; i<numButton.length;i++){
        numButton[i].addEventListener('click',function () {
                numButtonInput(numButton[i].value);
       });
    }

//NUMBER BUTTONS KEYBOARD LISTENER(KEYBOARD SUPPORT)
    document.addEventListener('keydown', (event) => {
        // Check if the pressed key matches the number button values
        for (let i = 0; i < numButton.length; i++) {
          if (event.key === numButton[i].value) {
            numButtonInput(numButton[i].value);
            break;
          }
        }
      });

//OPERATION BUTTONS EVENT LISTENERS
for(let i=0; i<opButton.length;i++){
    opButton[i].addEventListener('click',function () {
        opButtonInput(opButton[i].value);
   });
}

//OPERATION BUTTONS KEYBOARD LISTENER(KEYBOARD SUPPORT)
document.addEventListener('keydown', (event) => {
    // Check if the pressed key matches the operation button values
    for (let i = 0; i < opButton.length; i++) {
      if (event.key === opButton[i].value) {
        opButtonInput(opButton[i].value);
        break;
      }
    }
});


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



//FUNCTIONNNS-----------------------------------------------------

//NUMBER BUTTON INPUT FUNCTION
function numButtonInput(value){
    if (resNum) {
        operator = displayVal;
        displayVal = '';
        inputText.textContent = '';
        resNum = false;
        oneDeci = false;
        state = 3;
      }
      if (state == 0) {
        state = 1;
      }
      if (state == 1) {
        // only allows one decimal point
        if (value === '.') {
          if (oneDeci === false) {
            displayVal += value;
            inputText.textContent = displayVal;
            oneDeci = true;
          }
        } else {
          displayVal += value;
          inputText.textContent = displayVal;
        }
      }
    
      if (state == 3) {
        // only allows one decimal point
        if (value === '.') {
          if (oneDeci === false) {
            displayVal += value;
            inputText.textContent = displayVal;
            oneDeci = true;
          }
        } else {
          displayVal += value;
          inputText.textContent = displayVal;
        }
      }
}

//OPERATION BUTTON INPUT FUNCTION
function opButtonInput(value){
    if (state == 1) {
        num1 = displayVal;
        state = 2;
      }
      if (state == 2) {
        displayVal = value;
        operator = value;
        inputText.textContent = displayVal;
        resNum = true;
      }
    
      if (state == 3) {
        if (!resNum) {
          num2 = displayVal;
          num1 = operate(num1, num2, operator);
          inputText.textContent = num1;
        }
        if (value !== '=') {
          displayVal = value;
          operator = value;
          resNum = true;
        }
      }
}


//CHOOSE OPERATOR FUNCTION
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
 