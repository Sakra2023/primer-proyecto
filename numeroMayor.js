function ingreso(){
    let num1=parseInt(prompt("INGRESA EL PRIMERO NUMERO: "))
    let num2=parseInt(prompt("INGRESA EL SEGUNDO NUMERO: "))
    return {num1, num2}
}
function calculo(){
    let {num1,num2}=ingreso()
    if (num1>num2){
        document.write("EL NUMERO MAYOR ES: "+num1)
    }else{
        document.write("EL NUMERO MAYOR ES: "+num2)
    }
}
calculo()