let question = document.getElementById("question");
let answer   = document.getElementById("answer");


const array = [90,28,2,45,18];

function maximum(array){
    let max = 0;

    for(i=0; i<array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }

    return max;
}

function minimum(array){
    let min = array[0];

    for(i=0; i<array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
    }

    return min;
}


question.innerHTML=array;
answer.innerHTML=maximum(array)+ " " +minimum(array);