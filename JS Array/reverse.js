let question = document.getElementById("question");
let answer   = document.getElementById("answer");

const array = [11,12,13,14,15];

function reverse(array){
    const output = [];

    for(var i=array.length-1; i>-1; i--){
        output.push(array[i]);
    }

    return output
}

question.innerHTML=array;
answer.innerHTML=reverse(array);