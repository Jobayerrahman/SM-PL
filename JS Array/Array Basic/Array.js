//Simple Array Printing
var arrayElements = ['List01','List02','List03','List04','List05','List06'];
var east=['Bangladesh','Nepal','Butan','Pakistan','India','Mayanmar'];
var west=['America','Canada','Maxico','Bazil','Argentina'];
document.getElementById("arrayList").innerHTML = "List array : " + "[ " + arrayElements + " ]";
document.getElementById("eastCountryList").innerHTML = "East country array : " + "[ " + east + " ]";
document.getElementById("westCountryList").innerHTML = "West country array : " + "[ " + west + " ]";


//Concate Array Method 
var countries = east.concat(west);
document.getElementById("concatingCountryArray").innerHTML = "Concating countries array : " + "[ " + countries + " ]";;


countries.push('America');
countries.pop();
countries.pop();
countries.pop();