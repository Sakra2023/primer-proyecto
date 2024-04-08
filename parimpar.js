numero=parseInt(prompt("INGRESA UN NUMERO: "))
function par(nu){
    if (nu%2==0){
        document.write("EL NUMERO "+nu+" ES PAR")
    }else{
        document.write("EL NUMERO "+nu+" ES IMPAR")
    }
}
par(numero)