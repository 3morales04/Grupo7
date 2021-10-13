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
    let nombre=document.getElementById('nombre').value;
    let genero=document.getElementById('genero').value;
    let telefono=document.getElementById('telefono').value;
    let direccion=document.getElementById('direccion').value;
    let correo=document.getElementById('correo').value;
    let contrasena=document.getElementById('contrasena').value;
    //Crear un nuevo objeto usuario
    let user=new usuario(nombre,genero,telefono,direccion,correo,contrasena);
    registros.push(user);
    registros.forEach(registros => {
    console.log(registros.nombre, registros.genero, registros.telefono, registros.direccion, registros.correo, registros.contrasena);
    });
}

// funcion login
// valida el login con los campos correo telefono contraseña
function login(lcorreo, ltelefono, lcontrasena, valor){ 
    var lregistros = registros(); // la variable lregistros va a ser igual al registro que entrega la variable de agregar registros
    var Acceso = false; 

    for(var i = 0; i< lregistros.length; i++){ //recorro la varialbe lregistros buscando la coincidencia con la posicion
        if(lcorreo == lregistros[i][0] && ltelefono == lregistros[i][1] && lcontrasena == lregistros[i][2] &&  validarCAPTCHA(valorRecibido) == valor ){ // creo que aquitambien debe ser valido el captcha seguen el pdf
            Acceso = true; //si es igual es verdadero
        }
    }
    return Acceso;
}   

//3. Función validarCAPTCHA
function validarCAPTCHA(valor){
    let isValid = false;
    const ANSWER = "ocaso";
    const EXPRESION = /[^a-zA-Z0-9]/g; //!

    try{
        valor = valor.replace(EXPRESION,"");

        switch (valor.toLowerCase()){
            case "":
                throw "CAPTCHA vacío";
                break;
            case ANSWER:
                isValid = true;
                break;
            default:
                throw "CAPTCHA incorrecto";
        }
    }catch(error){
        console.log(error)
    }finally{
        //console.log(valor)
        return isValid;
    }
}

//Exportación variables y funciones
module.exports.registros = registros;
module.exports.login = login;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;

/*
module.exports = {
    registros,
    login,
    agregarRegistro,
    validarCAPTCHA,
}
*/
