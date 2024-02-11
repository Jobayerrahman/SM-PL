var photos = [
    "image/img1.jpg",
    "image/img2.jpg",
    "image/img3.jpg",
]

var imageTag = document.querySelector("img");
count = 0;

function prev(){
    count--;
    if(count < 0){
        count = photos.length -1;
        imageTag.src = photos[count];
    }
    else{
        imageTag.src = photos[count];
    }
}

function next(){
    count++;
    if(count >= photos.length){
        count =0;
        imageTag.src = photos[count];
    }
    else{
        imageTag.src = photos[count];
    }
}