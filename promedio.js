function ingreso(){
    num1=parseFloat(prompt("INGRESA EL PRIMER NUMERO: "))
    num2=parseFloat(prompt("INGRESA EL SEGUNDO NUMERO: "))
    num3=parseFloat(prompt("INGRESA EL TERCER NUMERO: "))
    return {num1,num2,num3}
}
function cal(){
    let {num1,num2,num3}=ingreso()
    let res=(num1+num2+num3)/3
    return res
}
document.write("PROMEDIO TOTAL: "+cal())