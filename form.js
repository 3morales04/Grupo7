//1. función para validar Nombre 
function checkNombre(valor) {
    const EXPRESION = /^[a-zA-ZÁ-ÿ\s]*$/; // Letras y espacios, pueden llevar acentos.
    let isValid = false;

    try{
        if(valor === ""){
            throw "valor vacío";
        }else {
            if(valor.length < 4  && String(valor).length > 30 ){
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

//2. función para validar GÉNERO
function checkGenero(valor) {
    let isValid = false;
    
    try{
        valor.forEach(element => {
            isValid ||= element.checked;
            //console.log(isValid); 
        });
    }catch(error){
        console.log(error);
    }finally{
        return isValid;
    }
}

//4. función para validar DIRECCIÓN
function checkDir(valor) {
    const EXPRESION = /^[0-9a-zA-Z\#\-\s]*$/;
    let isValid = false;

    try{
        if(valor === ""){
            throw "valor vacío";
        }else {
            if(valor.length > 50){
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
    const EXPRESION = /^[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+$/;
    let isValid = false;

    try{
        if(valor === ""){
            throw "valor vacío";
        }else if(EXPRESION.test(valor)){
            isValid = true;
            console.log(isValid);
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

function checkContrasena(valor){
    var contrasena =/^[0-9a-zA-Z]+$/;
    if(valor == "" || valor==null || valor.length==0){
        alert("Contraseña vacía");
    }else{
        if(valor.length<8){
            alert("Mínimo 8 caracteres")
        }else{
            if(contrasena.test(valor)){
                return true;
            }else{
                return false;
            }
        }
    }
}


//Exportación de módulos
module.exports = {
    checkNombre, 
    checkGenero, 
    checkTelefono, 
    checkDir, 
    checkCorreo, 
    checkContrasena
};

//console.log(checkDir("Calle 1O # 2-3"));
//console.log(checkDir("12th Simon st"));
//console.log(checkCorreo("usuario@correo.com"));
//console.log(checkTelefono(232343));
//console.log(checkNombre("Nombre Apellido"));
//console.log(checkContrasena("Maicol2019"));
//checkGenero([false,true,false]);