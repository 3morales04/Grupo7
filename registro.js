const FORM = require('./form.js');

//1. Arreglo de objetos
const registros = new Array();

function agregarRegistro(){
    console.log("Hola1");
    let _nombre = document.getElementById("Nombre").value;
    let _genero = document.getElementsByName("genero");
    let _telefono = document.getElementById("Telefono").value;
    let _direccion = document.getElementById("Direccion").value;
    let _correo = document.getElementById("Correo").value;
    let _contrasena = document.getElementById("Contrasena").value;

    if(
        FORM.checkNombre(_nombre) && 
        FORM.checkGenero(_genero) &&
        FORM.checkTelefono(_telefono) &&
        FORM.checkDir(_direccion) &&
        FORM.checkCorreo(_correo) &&
        FORM.checkContrasena(_contrasena) ){

            registros.push(
                {
                    nombre:_nombre,
                    genero:_genero,
                    telefono:_telefono,
                    direccion:_direccion, 
                    correo:_correo,
                    contrasena:_contrasena 
                }
            );
    }
    alert(registros);
}


function ordenarArreglo(arreglo){
    arreglo = Array.from(registros);//si es necesario que se vuelva a crear un arreglo?
    arreglo = registros.map(nombre=>nombre.textContent);
    console.log(arreglo);
    arreglo.sort();
    console.log(arreglo);

}

//Funcion para filtrar
function filtrarCorreo(arreglo) {
    arreglo = Array.from(registros);
    arreglo.forEach((e) => {
        if(/@gmail.com/i.test(e.correo)) results.push(e.correo);
    })
    console.log(arreglo)
    return arreglo;
}
//Exportación de módulos
module.exports = {
    agregarRegistro, ordenarArreglo, filtrarCorreo
};
