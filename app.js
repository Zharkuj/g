var boxxed = document.getElementsByTagName("div")[0];
var texth = document.querySelector(".text");
var h = document.querySelector(".img");
console.log(h)
console.log(texth)
var index = 0
boxxed.style.backgroundColor = "#e1e1e1";
boxxed.style.height=("350px");
boxxed.style.width=("250px");

console.log(boxxed)

var text = ["OIP.jpg", "h.jpg", "R (1).jpg", "R (2).jpg", "R (3).jpg", "Gr.jpg"];

console.log(texth[0]);
function add(){
    index++
    
    if(index>(text.length) - 1){
        index = 0
    }
    texth.innerText=text[index]
        h.src = text[index];
}




function subtract(){
    index--

    if(index<0 ){
        index = (text.length - 1)
    }
    texth.innerText=text[index]
    h.src = text[index];
    
}

var autot;

function auto(){
    index++
    texth.innerText=text[index]
    if(index>(text.length) - 1){
        index = 0

    
    }
    h.src = text[index];
    autot = setTimeout(auto, 1000)

}

function autont (){
    clearTimeout(autot);
}


// function hi(name){
//     console.log("sain baine uu?" + name);

// }
// setTimeout(hi,2000, " Erden")
