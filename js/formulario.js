
//boton
let ingreso = document.querySelector("#ingresar");

//funciones
function ingresar(){
    let nombre = document.querySelector("#nombre").value;
    if (nombre =='') {
        alert("Por favor, ingrese su nombre");
        return false
    }
    let apellido = document.querySelector("#apellido").value;
    if (apellido =='') {
        alert("Por favor, ingrese su apellido");
        return false
    }
    let edad = document.querySelector("#edad").value;
    if (edad =='') {
        alert("Por favor, ingrese su edad");
        return false
    }
    let comentarios = document.querySelector("#comentarios").value;
    if (comentarios == '') {
        alert("Por favor, ingrese su opinion para ayudarnos a mejorar nuestra página");
        return false
    }
    alert("Gracias " + nombre + " por visitar nuestro sitio!!!");
    return true;
}

//vaciar
function vaciarDatos() {
    document.querySelector('#nombre').value = '';
    document.querySelector('#apellido').value = '';
    document.querySelector('#edad').value = '';
    document.querySelector("#comentarios").value = '';
}

//event
ingreso.addEventListener('click', function(e) {
    e.preventDefault();
    if (ingresar()) {
        vaciarDatos();
    }
    });