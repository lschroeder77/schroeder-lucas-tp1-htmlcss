var titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo título cambiado con JS";

var parrafos = document.getElementsByClassName("parrafo");
parrafos[0].style.color = "red";

var div = document.querySelector("#contenedor");
div.style.backgroundColor = "lightblue";


var boton = document.getElementById("miBoton");

// Agregamos el evento click
boton.addEventListener("click", function() {
    
    // Mostrar alerta
    alert("¡Clic detectado!");
    
    // Cambiar el texto del botón
    boton.textContent = "¡Gracias!";
});

document.addEventListener("DOMContentLoaded", function() {

    let input = document.getElementById("inputTarea");
    let boton = document.getElementById("btnAgregar");
    let lista = document.getElementById("lista");

    boton.addEventListener("click", function() {

        let li = document.createElement("li");
        li.textContent = input.value;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);

        input.value = "";
    });

});

document.addEventListener("DOMContentLoaded", function() {

    // seleccionar input email y cambiar borde
    let email = document.querySelector('input[type="email"]');
    email.style.border = "2px solid blue";

    // seleccionar input password y agregar placeholder
    let password = document.querySelector('input[type="password"]');
    password.placeholder = "Ingrese su nombre aquí";

});

document.addEventListener("DOMContentLoaded", function() {

    let input = document.getElementById("inputComentario");
    let boton = document.getElementById("btnPublicar");
    let contenedor = document.getElementById("comentarios");

    boton.addEventListener("click", function() {

        let comentario = document.createElement("p");
        comentario.textContent = input.value;

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", function() {
            comentario.remove();
        });

        comentario.appendChild(btnEliminar);
        contenedor.appendChild(comentario);

        input.value = "";
    });

});