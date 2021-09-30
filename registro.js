const FORM = require('./form.js');

//1. Arreglo de objetos
const registros = new Array();

function agregarRegistro(){
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
                    genero:FORM.getRadioOption(_genero),
                    telefono:_telefono,
                    direccion:_direccion, 
                    correo:_correo,
                    contrasena:_contrasena 
                }
            );
            
            alert(registros);
            document.getElementById("form-registro").reset();
        } else {
            alert("Hay campos incorectos");
        }
    
}

function ordenarArreglo(arreglo){
    arreglo.sort(function(a, b){
        var nombreA=a.nombre.toLowerCase(), nombreB=b.nombre.toLowerCase()
        if (nombreA < nombreB) //sort string ascending
            return -1 
        if (nombreA > nombreB)
            return 1
        return 0 //default return value (no sorting)
    })
    return arreglo;
}
//console.log(ordenarArreglo(registros))


//Funcion para filtrar correo
function filtrarCorreo(arreglo) {
    let results=[];
    arreglo.forEach((e) => {
        if(/@gmail.com/i.test(e.correo)) results.push(e.correo);
    })
    return results;
}
console.log(filtrarCorreo(singers))
//Exportación de módulos
module.exports = {
    agregarRegistro, ordenarArreglo, filtrarCorreo
};
