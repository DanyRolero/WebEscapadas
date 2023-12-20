function calcularPrecio() {
    //Obtener el nombre
    let nombre = document.getElementById('nombre').value.trim();
    if(!validarNombre(nombre)) { 
        errorNombre();
        return;
    }


    //Obtener el correo
    let correo = document.getElementById('correo').value.trim();
    if(!validarCorreo(correo)) {
        errorEmail();
        return;
    }

    //Obtener la cantidad de personas
    let personas = document.getElementById('personas');
    let index = personas.selectedIndex;
    let numPersonas = personas[index].value;

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

    document.getElementById('precioTotal').innerHTML = nombre + " Disfruta de tu escapada por: " + precioTotal +"€" + "\n";

}

//------------------------------------------------------------------------
//Validar campo nombre
function validarNombre(nombre) {
    var regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/;
    if(!regex.test(nombre)) return false;
    return true;
}

//------------------------------------------------------------------------
//Mostrar error en el formularios
function validarCorreo(correo) {
    let regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(!regex.test(correo)) return false;

    return true;
}

//------------------------------------------------------------------------
//Mostrar error en el campo nombre
function errorNombre() {
    let campoNombre = document.getElementById('nombre');
    campoNombre.classList.add('errorCampo');
    document.getElementById('errorNombre').style.display = 'block';    
}

//------------------------------------------------------------------------
//Mostrar error en el campo email
function errorEmail() {
    let campoEmail = document.getElementById('correo');
    campoEmail.classList.add('errorCampo');
    document.getElementById('errorEmail').style.display = 'block';    
}

//------------------------------------------------------------------------
//Vacía un campo y ooculta la alerta al hacer foco en dicho campo
function restablecerCampo(campo) {
    campo.classList.remove('errorCampo');
    campo.value = "";
    let campos = document.getElementsByName('errorCampo');
    for(let i = 0; i < campos.length; i++) campos[i].style.display = "none";
}

