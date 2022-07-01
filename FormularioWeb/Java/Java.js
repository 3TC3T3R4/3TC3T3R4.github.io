function enviar(){


let nombre=document.getElementById("name").value;
let correo=document.getElementById("email").value;
let asunto=document.getElementById("asunto").value;
let nota=document.getElementById("nota").value;
console.log(nombre);
console.log(correo);
console.log(asunto);
console.log(nota);

if(nombre.length == 0 ){


    alert("El campo nombre esta vacio, por favor llenarlo");
    
    
}



if(correo.length == 0){


    alert("El campo correo esta vacio, por favor llenarlo");


}

if(asunto.length == 0){



    alert("El campo asunto esta vacio, por favor llenarlo");



}

if(nota.length==0){



    alert("El campo donde va el mensaje a enviar esta vacio, por favor llenarlo");


}


}



