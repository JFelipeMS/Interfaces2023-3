//alert("hola Mundo JavaScript")

console.log('hola Mundo JavaScript')

//Manejo de Variables
var varhola = 'texto1'
let var01 = 'texto2'
var varhola = 2000

//mutabilidad
varhola = "Hola Mundo "
var01 = "JavaScript"
console.log(varhola + var01)

//declarar constantes
const PI = 3.1416
console.log(PI)

//declarar variables de tipo numerico
let minumber01 = 10
let minumber02 = -12
let minumber03 = 1.234
console.log(minumber01, minumber02, minumber03)

//declarar variables de tipo booleano
let miboolean01 = true
let miboolean02 = false
console.log(miboolean01, miboolean02)

//declarar variables nulas y undefined
let mivariable01 = null
let mivariable02
console.log(mivariable01, mivariable02)
mivariable02 = 666
console.log(mivariable01, mivariable02)

//declarar variables de tipo objeto
let miobjeto01 = {
    minumero : 12,
    mistring : "hola JavaScript",
    mibooleano : true, 
}
console.log(miobjeto01)
console.log(miobjeto01.minumero)
console.log(Object.values(miobjeto01))

//declarar arreglos
const arrayvacio = []
const arraylleno = [12, "hola", false, 1.234]
console.log(arraylleno, arrayvacio)
arrayvacio.push(minumber01)
arrayvacio.push(miboolean01)
arrayvacio.push(varhola)
arrayvacio.push(miobjeto01)
console.log(arraylleno, arrayvacio)

let milista01 = [10, 2, 4, 18, 23] //Listas
console.log(milista01)