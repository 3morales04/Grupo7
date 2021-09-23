//1. función para validar Nombre
/*
function checkNombre(valor) {
    const EXPRESION = new RegExp("^[A-Z]+$","i");// Letras y espacios, pueden llevar acentos.
    let isValid = false;

    try{
        if(valor === ""){
            throw "valor vacío";
        }else {
            if(String(valor).length < 4  && String(valor).length > 30 ){
                throw "valor excede el tamaño permitido";
            } else{
                if(EXPRESION.test(valor)){
                    isValid = true;
                };
            }
        }
    }catch(error){
        console.log(error);
    }finally{
        return isValid;
    }
}
*/

//1. función para validar Nombre
function checkNombre(valor) {
    if (valor == "") {
        alert("Escriba su Nombre");
        valor.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(valor)) {
        alert("Caracteres inválidos, solo letras");
        valor.focus();
        return false;
    }
}


//4. función para validar DIRECCIÓN
function checkDir(valor) {
    const EXPRESION = new RegExp("^[0-9a-zA-Z\#+\-?\s*]*$");
    let isValid = false;

    try{
        if(valor === ""){
            throw "valor vacío";
        }else {
            if(String(valor).length > 50){
                throw "valor excede el tamaño permitido";
            } else{
                if(EXPRESION.test(valor)){
                    isValid = true;
                };
            }
        }
    }catch(error){
        console.log(error);
    }finally{
        return isValid;
    }
}

//5. función para validar CORREO
function checkCorreo(valor) {
    const EXPRESION = new RegExp("^[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+$");
    let isValid = false;

    try{
        if(valor === ""){
            throw "valor vacío";
        }else {
            if(String(valor).length > 50){
                throw "valor excede el tamaño permitido";
            } else{
                if(EXPRESION.test(valor)){
                    isValid = true;
                };
            }
        }
    }catch(error){
        console.log(error);
    }finally{
        return isValid;
    }
}

//3. función para validar Telefono
function checkTelefono(valor) {
    var telefono = /^[0-9]{7}$/;
    if (valor == ""){
        console.log("Valor vacío");
    }else{
        if (telefono.test(valor)){
            return true;
        }else{
            return false;
        }
    }
}

//Exportación de módulos
module.exports = checkDir;
module.exports = checkCorreo;
module.exports = checkTelefono;
module.exports = checkNombre;
//TEST
//console.log(checkDir("Calle 1O # 2-3"));
//console.log(checkDir("12th Simon st"));
//console.log(checkCorreo("usuario@correo.com"));
//console.log(checkTelefono(232343));
//console.log(checkNombre("Nombre Apellido"));