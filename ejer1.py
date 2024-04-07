def ingreso():
    frase=input("INGRESA UNA FRASE: ")
    return frase

def conteo():
    cont=ingreso()
    print(len(cont)%2==0)

conteo()