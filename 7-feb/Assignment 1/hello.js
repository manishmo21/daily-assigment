function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}
function calculate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}
let operator = prompt("Enter your choice (+,-,*,/)");
let num1 = prompt("Enter a number");
let num2 = prompt("Enter a number");
num1=parseInt(num1);
num2=parseInt(num2);
alert(calculate("Result is "+operator, num1, num2));
console.log(calculate(operator, num1, num2)); 

