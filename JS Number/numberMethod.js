var number = 20;
var stringNumber = "20";
var letter = "Joa";

console.log(typeof(number));
console.log(typeof(stringNumber));
console.log(typeof(letter));

console.log(typeof(toString(number)));
console.log(typeof(parseInt(stringNumber)));
console.log(typeof(parseFloat(stringNumber)));

console.log(typeof(Number(stringNumber)));
console.log(typeof(Number(letter)));

var decimalNumber= 20.5678;

console.log(decimalNumber.toFixed(3));
console.log(decimalNumber.toPrecision(4));