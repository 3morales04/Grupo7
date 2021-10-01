//Declaración del arreglo global donde se almacenan los registros
let registros=[];


function agregarRegistro(){
    //Función que toma la información ingresada en el formulario registro y crear el objeto.

    function usuario(nombre,genero,telefono,direccion,correo,contrasena){
    this.nombre=nombre;
    this.genero=genero;
    this.telefono=telefono;
    this.direccion=direccion;
    this.correo=correo;
    this.contrasena=contrasena;
    }

    var nombre=document.getElementById('nombre').value;
    var genero=document.getElementById('genero').value;
    var telefono=document.getElementById('telefono').value;
    var direccion=document.getElementById('direccion').value;
    var correo=document.getElementById('correo').value;
    var contrasena=document.getElementById('contrasena').value;

    //Crear un nuevo objeto usuario
    var user=new usuario(nombre,genero,telefono,direccion,correo,contrasena);



    registros.push(user);
    registros.forEach(registros => {
    console.log(registros.nombre, registros.genero, registros.telefono, registros.direccion, registros.correo, registros.contrasena);
    });

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

module.exports = {registros, ordenarArreglo, filtrarCorreo, agregarRegistro};
