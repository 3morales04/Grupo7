import * as form from "./form.js";

let registros=[];

function agregarRegistro(){
    let _nombre=document.getElementById("Nombre").value;
    let _genero=document.getElementsByName("Genero");
    let _telefono=document.getElementById("Telefono").value;
    let _direccion=document.getElementById("Direccion").value;
    let _correo=document.getElementById("Correo").value;
    let _contrasena=document.getElementById("Contrasena").value;

    if(
        form.checkNombre(_nombre) &&
        form.checkGenero(_genero) &&
        form.checkTelefono(_telefono) &&
        form.checkDir (_direccion) &&
        form.checkCorreo(_correo) &&
        form.checkContrasena(_contrasena)
        ){
            const usuario = {
                nombre: _nombre,
                genero: form.getRadioOption(_genero),
                telefono: _telefono,
                direccion: _direccion,
                correo: _correo,
                contrasena: _contrasena
            }
            registros.push(usuario);
    }
    console.log(registros);
    
    alert(registros);        
}


//Funcion para ordenar Arreglo
function ordenarArreglo(arreglo){
    arreglo.sort(function(a, b){
        var NombreA=a.nombre.toLowerCase(), NombreB=b.nombre.toLowerCase()
        if (NombreA < NombreB) //sort string ascending
            return -1 
            
        if (NombreA > NombreB)
            return 1
        return 0 //default return value (no sorting)
    })
    console.log(arreglo);
    return arreglo;
}
//console.log(ordenarArreglo(registros))

//Funcion para filtrar correo
function filtrarCorreo(arreglo) {
    let results=[];
    arreglo.forEach((e) => {
        if(/@gmail.com/i.test(e.correo)) results.push(e.correo);        
    })
    console.log(results);
    return results;
}
//console.log(filtrarCorreo(registros))

//Exportación de módulos
export {
    registros,
    ordenarArreglo,
    filtrarCorreo,
    agregarRegistro
};

const btnRegistrar = document.getElementById("btn-submit-form");
btnRegistrar.addEventListener("click",agregarRegistro);