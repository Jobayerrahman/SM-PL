var paraghrap = document.querySelector("#para");
function addStyle(){
    //paraghrap.style.color = "red";
    //paraghrap.style.fontSize = "2rem";
    //paraghrap.style.fontWeight = "bold";
    //paraghrap.style.fontStyle = "italic";
    paraghrap.classList.add("para-style");
}

function removeStyle(){
    paraghrap.classList.remove("para-style");
}
