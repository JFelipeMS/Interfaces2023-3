var num1 = 8
var num2 = 3, num3 = 1

console.log("Operadores Aritmeticos")
var num4 = num1 + num2  //suma
console.log(num1, num2, num4)
var num4 = num1 % num2 //modulo
console.log(num1, num2, num4)
num3++  //incrmento
console.log(num3)
num3--  //decremento
console.log(num3)

console.log("Operadores de comparacion")
console.log(num1 > num2)
console.log(num1 >= num2)
console.log(num1 == num2)
console.log(num1 != num2)
console.log(0 == false)
console.log(0 === false)  //estrictamente igual
console.log(0 !== false)  //estrictamente no igual

console.log("Operadores de asignacion")
var num4 = num3
console.log(num4)
num4 += num1
console.log(num4)

console.log("Operadores logicos")
console.log(true & true)
console.log(true & false)
console.log(true || false)
console.log(false || false)
console.log(!false)
console.log(!true)

console.log("Operadores condicional")
var num1 = 8
var num2 = 3, num3 = 1
var mayor
num1 > num2 ? mayor = num1 : mayor = num2
console.log(num1, num2, mayor)