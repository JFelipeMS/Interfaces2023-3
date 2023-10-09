//funcion que no tiene parametros y no regresa nada
function funcion01 () {
    var a = 3, b = 2
    console.log("ejecutando funcion 01", a * b)
}
//funcion que si tiene parametros y no regresa nada
function funcion02 (a, b) {
    //var a = 3, b = 2
    console.log("ejecutando funcion 02", a * b)
}
//funcion que no tiene parametros, pero si regresa valor
function funcion03 () {
    var a = 5, b = 2
    return a * b
}
//funcion que si tiene parametros y regresa valor
function funcion04 (a, b, c) {
    //var a = 5, b = 2
    return (a + b) * c
}

funcion01()
funcion02(4,3)
var c = funcion03()
console.log("valor almacenado en la varible c: ",c)
var c = funcion04(c, 2, 3)
console.log("nuevo valor almacenado en la varible c: ",c)


//Funciones Flecha o Fat Arrow
const funcion05 = () => {
    var a = 3, b = 2
    console.log("ejecutando funcion 05", a * b)
}
const funcion06 = (a, b) => a * b

funcion05()
var c = funcion06(7, 8)
console.log("nuevo valor almacenado en la varible c: ",c)

//Funciones sin nombre o Callback
function suma(a, b, c){
    var d = a + b
    c(d)
}
function callback01(a){
    console.log("el resultado de la suma es: ", a)
}
suma(6,4,callback01)

suma(6,4, function(d){
    console.log("el resultado de la suma es: ", d)
})