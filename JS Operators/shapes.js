var base = parseFloat(prompt("Enter the base : "));
var height = parseFloat(prompt("Enter the height : "));

var square = base * height;
var rectangle = base * height;
var triangle = (base * height)/2;

document.write("Square : "+square + "<br/>" + "Rectangle : "+rectangle + "<br/>"+"Triangle : "+ triangle + "<br/>");