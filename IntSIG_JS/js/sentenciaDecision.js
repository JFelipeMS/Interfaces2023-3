function funcionif01(a){
    if(a < 18){
        console.log("es menor de edad", a)
    }
}
function funcionif02(a){
    if(a < 18){
        console.log("es menor de edad", a)
    } else {
        console.log("es mayor de edad", a)
    }
}
function funcionif03(a){
    if(a <= 5){
        console.log("Primera infancia", a)
    } else if(a <= 11){
        console.log("Infancia", a)
    } else if(a <= 18){
        console.log("Adolecencia", a)
    } else if(a <= 26){
        console.log("Juventud", a)
    }else if(a <= 59){
        console.log("Adultez", a)
    } else {
        console.log("Vejez", a)
    }
}

function funcionswitch01(a){
    switch(a){
        case 'rosa':
            console.log("se venden por docenas")
            break
        case 'girasol':
            console.log("se venden por unidad")
            break
        case 'hortensia':
            console.log("se venden por ramos")
            break
        default:
            console.log("se venden por parejas")
    }
}

function funcionswitch02(a){
    switch(a){
        case 1:
            console.log("Opcion 1")
            break
        case 2:
            console.log("Opcion 2")
            break
        case 3:
            console.log("Opcion 3")
            break
        default:
            console.log("Opcion no encontrada")
    }
}

funcionswitch01('rosa')

funcionif01(15)
funcionif01(19)
funcionif02(14)
funcionif02(19)
funcionif03(4)
funcionif03(9)
funcionif03(14)
funcionif03(24)
funcionif03(34)
funcionif03(64)