//VARIABLES
let num1 =33;
let num2 = 43;
let operator = '+';
let displayVal="";
let inputText = document.getElementById('inputText');
let calcButton = document.querySelectorAll('.buttons');
//EVENT LISTENERS
    for(let i=0; i<calcButton.length;i++){
        calcButton[i].addEventListener('click',function () {
           displayVal += calcButton[i].value;
           inputText.textContent = displayVal;
       });
    }
  /*  calcButton[i].addEventListener('click',function () {
        console.log(calcButton[i].value);
   });*/

//FUNCTIONS
operate(num1,num2,operator);

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

console.log("232" +"3444");