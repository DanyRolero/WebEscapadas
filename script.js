//Obtener el nombre del formulario
//Validar nombre del formulario
//Resaltar error en el campo nombre del formulario

//Obtener correo del formulario
//Validar correo
//Resaltar error en el campo correo del formulario

//Obtener número de personas

//Obtener tipo de escapada elegida

//Calcular el precio de la escapada
//Mostrar un mensaje en el que aparezca en nombre introducido y el precio total de la escapada





function calcularPrecio() {
    //Obtener el nombre
    let nombre = document.getElementById('nombre').value.trim();

    //Obtener el correo
    let correo = document.getElementById('correo').value.trim();

    //Obtener la cantidad de personas
    let personas = document.getElementById('personas');
    let numPersonas;

    for(let i=0; i < personas.length; i++) {
        if(personas[i].selected) numPersonas = personas[i].value;
    }

    //Obtener el tipo de escapada
    let escapadas = document.getElementsByName('escapada');
    let escapadaSeleccionada;

    for(let i = 0; i<escapadas.length; i++) {
        if(escapadas[i].checked) escapadaSeleccionada = escapadas[i].id;
    }

    //Obtener el precio unitario total
    let precios = [];
    precios["ciudad"] = 100;
    precios["montana"] = 130;
    precios["playa"] = 150;
    let precioTotal = precios[escapadaSeleccionada] * numPersonas;
}

//Validar campo nombre
function validarNombre(nombre) {
    var regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/;
    if(!regex.test(nombre)) //Ejecuta error campo nombre
}

function validarCorreo(correo) {

    return false;
}

