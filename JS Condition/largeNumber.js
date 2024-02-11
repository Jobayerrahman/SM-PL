var number1 = prompt("Enter the number : ");
var number2 = prompt("Enter the number : ");
var number3 = prompt("Enter the number : ");

if(number1>number2 && number1>number3){
    document.write("Large number is : "+number1);
}
else if(number2>number1 && number2>number3){
    document.write("Large number is : "+number2);
}
else{
    document.write("Large number is : "+number3);
}