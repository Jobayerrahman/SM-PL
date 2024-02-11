var number1 = prompt("Enter the number : ");
var number2 = prompt("Enter the number : ");
var number3 = prompt("Enter the number : ");

var result = number1>number2 && number1>number3 ? "large number is number1" : number2>number3 && number2>number3 ? "large number is number2" : "large number is number3";

document.write(result);