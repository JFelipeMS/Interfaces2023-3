function funcionForIn(a){
    for(let i in a){
        console.log(i)
    }
}
var miarray = [1, 12, 2, 54]
funcionForIn(miarray)
var miobjeto = {nombre:"Ana",edad:23,genero:true}
funcionForIn(miobjeto)

function funcionfor(a){
    let suma = 0
    for(var i = 1;i <= a;i++){
        suma += i
    }
    return suma
}
function funcionWhile(a){
    let suma = 0
    var i = 1
    while(i <= a){
        suma += i
        i++
    }
    return suma
}
function funcionDo(a){
    let suma = 0
    var i = 1
    do{
        suma += i
        i++
    }while(i <= a)
    return suma
}
var limite = 0
console.log("suman: ",funcionfor(limite))
console.log("suman: ",funcionWhile(limite))
console.log("suman: ",funcionDo(limite))