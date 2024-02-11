var num1 = prompt("Enter the number1 : ");
var num2 = prompt("Enter the number2 : ");

function addition(x,y){
    var result = x + y;
    document.write("Addition : "+ result +"<br/>");    
}

function subtraction(x,y){
    if(x>y){
        var result = x - y;
    }
    else{
        var result = y - x;
    }
    document.write("Subtraction : "+result +"<br/>");    
}

function multiplication(x,y){
    var result = x * y;
    document.write("Multiplication : "+result +"<br/>");    
}

function division(x,y){
    if(x>y){
        var result = x / y;
    }else{
        var result = y / x;
    }
    document.write("Division : "+result +"<br/>");    
}

addition(num1,num2);
subtraction(num1,num2);
multiplication(num1,num2);
division(num1,num2);