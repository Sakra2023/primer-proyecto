function ingreso(){
    let frase=prompt("INGRESA UNA FRASE: ")
    return frase
}

function ejemlo(){
    let res=ingreso()
    let hola=res.split("").reverse().join("")
    return hola
}

document.write(ejemlo()+"<br>")


function co(){
   let f=prompt("INGRESA UNA PALABRA")
   return f
}
function conteo(){
    let re=co()
    return re.length%2==0
}
document.write(conteo())