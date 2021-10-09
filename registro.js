import * as form from "./form.js";

let registros=[];

class Usuario {
    constructor(nombre, genero, telefono, direccion, correo, contrasena) {
        this.nombre = nombre,
        this.genero = genero,
        this.telefono = telefono,
        this.direccion = direccion,
        this.correo = correo,
        this.contrasena = contrasena;
    }
    toString() {
        return (`Nombre: ${this.nombre}\nGenero: ${this.genero}\nTeléfono: ${this.telefono}\nDirección: ${this.direccion}\nCorreo: ${this.correo}\nContraseña: ${this.contrasena}`);
    }
}


//1. Función para agregar registro
function agregarRegistro(){
    let nombre=document.getElementById("Nombre").value;
    let genero=document.getElementsByName("Genero");
    let telefono=document.getElementById("Telefono").value;
    let direccion=document.getElementById("Direccion").value;
    let correo=document.getElementById("Correo").value;
    let contrasena=document.getElementById("Contrasena").value;

    if(
        form.checkNombre(nombre) &&
        form.checkGenero(genero) &&
        form.checkTelefono(telefono) &&
        form.checkDir (direccion) &&
        form.checkCorreo(correo) &&
        form.checkContrasena(contrasena)
        ){
            registros.push(new Usuario(nombre, form.getRadioOption(genero), telefono, direccion, correo, contrasena));
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

//Exportación de módulos:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export {
    registros,
    ordenarArreglo,
    filtrarCorreo,
    agregarRegistro
};

//Funcionamiento boton Registro::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const btnRegistrar = document.getElementById("btn-submit-form");
btnRegistrar.addEventListener("click",agregarRegistro);