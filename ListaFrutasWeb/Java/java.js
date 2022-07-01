const main = () =>{

let btn = document.getElementById("Red");
let btn2 = document.getElementById("Blue");

let li1 = document.getElementById("1");
let li2 = document.getElementById("2");
let li3 = document.getElementById("3");
let li4 = document.getElementById("4");
let li5 = document.getElementById("5");
let li6 = document.getElementById("6");
let li7 = document.getElementById("7");
let li8 = document.getElementById("8");
let li9 = document.getElementById("9");
let li10 = document.getElementById("10");


let body = document.querySelector('body');

let colores=['blue'];
let colores2=['pink'];

btn.addEventListener('click', fondo);

btn2.addEventListener('click', fondo2);

function fondo() {
    var indice=parseInt(Math.random()*colores.length);
    body.style.backgroundColor=colores[indice];
    li1.style.backgroundColor=colores2[indice];
    li3.style.backgroundColor=colores2[indice];
    li5.style.backgroundColor=colores2[indice];
    li7.style.backgroundColor=colores2[indice];
    li9.style.backgroundColor=colores2[indice];
}

function fondo2() {
    var indice=parseInt(Math.random()*colores.length);
    body.style.backgroundColor=colores2[indice];
    li2.style.backgroundColor=colores[indice];
    li4.style.backgroundColor=colores[indice];
    li6.style.backgroundColor=colores[indice];
    li8.style.backgroundColor=colores[indice];
    li10.style.backgroundColor=colores[indice];
}





}