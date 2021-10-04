//Declaración del arreglo global donde se almacenan los registros
let registros=[];


function agregarRegistro(){

    let nombre=document.getElementById('nombre').value;
    let genero=document.getElementsByName('genero').values;
    let telefono=document.getElementById('telefono').value;
    let direccion=document.getElementById('direccion').value;
    let correo=document.getElementById('correo').value;
    let contrasena=document.getElementById('contrasena').value;

    registros.push({
        nombre,
        genero,
        telefono,
        direccion,
        correo,
        contrasena
    });
    console.log(registros);
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
    return arreglo;
}
console.log(ordenarArreglo(registros))

//Funcion para filtrar correo
function filtrarCorreo(arreglo) {
    let results=[];
    arreglo.forEach((e) => {
        if(/@gmail.com/i.test(e.correo)) results.push(e.correo);
        
    })
    return results;
}
console.log(filtrarCorreo(registros))

//Exportación de módulos
module.exports = {
    registros,
    ordenarArreglo,
    filtrarCorreo,
    agregarRegistro
};