/*


variables

inicializar las con let y var son buenas practicas 
 mala practica(a=10)

let a = 10;// buena practica
var b = 10; // no deberia usarse  ya esta viejo
cont v = 10; // es una constante  no se puede modificar
const v = 20 ; // esto me arrojaria error

*/

const main = () =>{

let btn = document.getElementById("blue");
let btn2 = document.getElementById("red");
let btn3 = document.getElementById("green");


let body = document.querySelector('body');
let colores=['blue'];
let colores2=['red'];
let colores3=['green'];


console.log(btn);
console.log(btn2);
console.log(btn3);


btn.addEventListener('click', fondo);
btn2.addEventListener('click', fondo2);
btn3.addEventListener('click', fondo3);



function fondo() {
    var indice=parseInt(Math.random()*colores.length);
    body.style.backgroundColor=colores[indice];
}

function fondo2() {
    var indice=parseInt(Math.random()*colores2.length);
    body.style.backgroundColor=colores2[indice];
}

function fondo3() {
    var indice=parseInt(Math.random()*colores3.length);
    body.style.backgroundColor=colores3[indice];
}


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

}
//----------------------------------------------//

