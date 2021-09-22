
//4. función para validar DIRECCIÓN
function checkDir(valor) {
    const EXPRESION = new RegExp("/([0-9a-zA-Z\#?\-?]+)/");
    let isValid = false;

    try{
        if(isNaN(valor)){
            throw "Valor vacío";
        }else {
            if(String(valor).length > 50){
                throw "Valor excede el tamaño permitido";
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
    const EXPRESION = new RegExp("/[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+/");
    let isValid = false;

    try{
        if(isNaN(valor)){
            throw "Valor vacío";
        }else {
            if(String(valor).length > 50){
                throw "Valor excede el tamaño permitido";
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
    const telefono = new RegExp("/^[0-9]{7}$/");
    let isValid= false;
    try {
        if(isNaN(valor)){
            throw "Valor vacio"
        }else{
            if (telefono.test(valor)){
                isValid= true;
            }else{
                isValid= false;
            }
        }
    } catch(error){
        console.log(error);
    }finally{
        return isValid;
    }
}


//Exportación de módulos



module.exports = checkDir;
module.exports = checkCorreo;
module.exports = checkTelefono;