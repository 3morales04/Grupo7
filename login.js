let registros = [];


// funcion del sprint 3
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

// funcion login
// valida el login con los campos correo telefono contraseña
function login(lcorreo, ltelefono, lcontrasena){ 
    var lregistros = registros(); // la variable lregistros va a ser igual al registro que entrega la variable de agregar registros
    var Acceso = false; 

    for(var i = 0; i< lregistros.length; i++){ //recorro la varialbe lregistros buscando la coincidencia con la posicion
        if(lcorreo == lregistros[i][0] && ltelefono == lregistros[i][1] && lcontrasena == lregistros[i][2]){ // creo que aquitambien debe ser valido el captcha seguen el pdf
            Acceso = true; //si es igual es verdadero
        }
    }
    return Acceso
}   

function validarCAPTCHA(valor){

}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;
