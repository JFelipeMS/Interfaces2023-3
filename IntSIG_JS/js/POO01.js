class Persona {
    Nombre = "Adonay"
    Edad = 32
    Genero
}

console.log(".... Clase Persona .....")
//creacion de una instancia de la clase persona
var Per01 = new Persona()
//lectura de los atributos de la instancia
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
//escritura de atributos
Per01.Nombre = "Andy"
Per01.Edad = 21
Per01.Genero = true
//lectura de los atributos de la instancia
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)