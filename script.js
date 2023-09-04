document.addEventListener("DOMContentLoaded", function(){
const formulario= document.getElementById("form")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();


    //datos del formulario

const nombre= document.getElementById("nombre").value;
const apellido= document.getElementById("apellido").value;
const fechaNacimiento= document.getElementById("fechaNacimiento").value;

//agrupo todos los datos en un objeto
const persona={
    nombre:nombre,
    apellido:apellido,
    fechaNacimiento: fechaNacimiento
};


//fetch

fetch("https://jsonplaceholder.typicode.com/users.", {
    method:"POST", 
    headers: {
        "Content-Type":"application/json"
    },
    body:JSON.stringify(persona)

})
.then(response=>response.json())
.then(data => {
    console.log("Respuesta del servidor:",persona);
  
    })
    .catch(error => {
    console.error("Error al enviar la solicitud:", error);
    
    });
    });

})





