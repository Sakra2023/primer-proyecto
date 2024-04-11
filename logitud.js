function ingreso(){
    pal =prompt("INGRESA UNA PALABRA: ")
    return {pal}
}

function conteo(){
    let {pal}=ingreso()
    if (pal.length<=5){
        document.write("ESTA PALABRA ES CORTA")
    }else{
        document.write("ESTA PALABRA ES LARGA ")
    }
}
conteo()