
var counter = document.querySelector("h3");
function increment(){
    counter.innerHTML= "Increment button is clicked";
}
function decrement(){
    counter.innerHTML= "decrement button is clicked";
}

var myPara = document.querySelector(".paraeven");
myPara.addEventListener("mouseover",function(){
    myPara.style.color = "red";
    myPara.style.fontSize = "2rem";
    myPara.style.fontWeight = "bold";
    myPara.style.fontStyle = "italic";
});
myPara.addEventListener("mouseout",function(){
    myPara.style.color = "black";
    myPara.style.fontSize = "2rem";
});