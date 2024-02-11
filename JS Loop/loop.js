var  i = 1;
var  j = 1;

while(i<=100){
    if(i%3==0 && i%5==0){
        document.write("Number : "+i+ "<br/>");
    }
    i++;
}

do{
    document.write(j + "  ");
    j++;
}while(j<=10);

document.write("<br/>")

for(var x=1; x<=100; x++){
    if(x%2==0 && x%4==0){
        document.write(" "+x);
    }
}

for(var y=1; y<=100; y++){
    if(y%2==0){
        continue;
    }
    document.write(" "+y);
}