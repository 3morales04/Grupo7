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

//Exportación de módulos



//module.exports = checkDir;
//module.exports = checkCorreo;

//TEST
//console.log(checkDir("Calle 1O # 2-3"));
//console.log(checkDir("12th Simon st"));
//console.log(checkCorreo("usuario@correo.com"));