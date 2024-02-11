var number1 = prompt("Enter 1st number : ");
var number2 = prompt("Enter 2nd number : ");

document.write("Type of number1 : " + typeof(number1) + "<br/>");
document.write("Type of number2 : " + typeof(number2) + "<br/>");

var result;


result = Number(number1) + Number(number2);
document.write("Result : " +number1+ " + " +number2+ " = " + result + "<br/>");

result = number1 - number2;
document.write("Result : " +number1+ " - " +number2+ " = " + result + "<br/>");

result = number1 * number2;
document.write("Result : " +number1+ " * " +number2+ " = " + result + "<br/>");

result = number1 / number2;
document.write("Result : " +number1+ " / " +number2+ " = " + result + "<br/>");