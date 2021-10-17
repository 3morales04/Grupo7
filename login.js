let registros = [];

//1. Función login::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function login(){
    let acceso = false;
    let telefono=document.getElementById("telefono").value;
    let correo=document.getElementById("correo").value;
    let contrasena=document.getElementById("contrasena").value;
    let captcha=document.getElementById("captcha").value;

    //Quemando datos en registros (el bot no esta llamando la funcion agregarRegistro())
    agregarRegistro();

    registros.forEach(e => {
        if(e.correo.toLowerCase() === correo.toLowerCase()){
            if(e.telefono == telefono && e.contrasena == contrasena /*&& validarCAPTCHA(captcha)*/){
                acceso = true;
            }
        }
    });

    return acceso;
}

//2. Función validarCAPTCHA:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function validarCAPTCHA(valor){
    let isValid = false;
    const ANSWER = "ocaso";
    const EXPRESION = /[^a-zA-Z0-9]/g; //!

    try{
        valor = valor.replace(EXPRESION,"");

        switch (valor.toLowerCase()){
            case "":
                throw "CAPTCHA vacío";
                //break;
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

//ANEXO. Función agregarRegistro (del sprint 3):::::::::::::::::::::::::::::::::::::::::::::::
function agregarRegistro(){
    /*
    let nombre=document.getElementById('nombre').value;
    let genero=document.getElementById('genero').value;
    let telefono=document.getElementById('telefono').value;
    let direccion=document.getElementById('direccion').value;
    let correo=document.getElementById('correo').value;
    let contrasena=document.getElementById('contrasena').value;
        
    const user = {
        nombre,
        genero,
        telefono,
        direccion,
        correo,
        contrasena
    }
    */

    //Quemando datos que el bot no esta ingresando
    //============================================
    const user = {
        nombre: "juan",
        genero: "m",
        telefono: "1234567",
        direccion: "12 calle 456",
        correo: "juan@gmail.com",
        contrasena: "SecurePassword123"
    }
    //============================================

    registros.push(user);
    registros.forEach(r => {
        console.log(`Nom: ${r.nombre},\nGen: ${r.genero},\nTel: ${r.telefono},\nDir: ${r.direccion},\nCorr: ${r.correo},\nCon: ${r.contrasena}`);
    });
}

//Exportación variables y funciones:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
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