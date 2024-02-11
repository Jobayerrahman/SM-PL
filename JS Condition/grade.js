var result = prompt("Enter Your Result : ");

if(result>=80){
    document.write("Your Grade IS A+");
}
else if(result<80 && result>=70){
    document.write("Your Grade IS A ");
}
else if(result<70 && result>=60){
    document.write("Your Grade IS A- ");
}
else if(result<60 && result>=50){
    document.write("Your Grade IS B+ ");
}
else if(result<50 && result>=40){
    document.write("Your Grade IS B ");
}
else if(result<40 && result>=35){
    document.write("Your Grade IS B- ");
}
else{
    document.write("Your Grade IS F ");
}