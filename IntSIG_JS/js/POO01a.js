//clase Persona con sus atributos privados
class Persona {
    _Nombre = "Adonay"
    _Edad = 32
    _Genero
}

console.log(".... Clase Persona .....")
//creacion de una instancia de la clase persona
var Per01 = new Persona()
//lectura de los atributos de la instancia
console.log(Per01._Nombre, Per01._Edad, Per01._Genero)
//escritura de atributos
Per01._Nombre = "Andy"
Per01._Edad = 21
Per01._Genero = true
//lectura de los atributos de la instancia
console.log(Per01._Nombre, Per01._Edad, Per01._Genero)