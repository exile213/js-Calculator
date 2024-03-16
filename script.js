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

operate(21,33,'*');