for(var i=1; i<=5; i++){
    var input = prompt("Enter the number : ");
    var number = Math.floor(Math.random()*5)+1;

    if(input == number){
        console.log("Your guessing correct");
    }
    else{
        console.log("Your guessing wrong "+number);
    }
}