let registros = [];

function login(){
}

function agregarRegistro(){
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
                throw "CAPTCHA vacio";
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