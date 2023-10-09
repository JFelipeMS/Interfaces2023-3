//clase Persona con sus atributos privados
class Persona {
    #Nombre 
    #Edad
    #Genero
    getNombre() {return this.#Nombre}
    getEdad() {return this.#Edad}
    getGenero() {return this.#Genero}
    setNombre(Nombre) {this.#Nombre = Nombre}
    /*constructor(){
        this.#Nombre = "Adonay"
        this.#Edad = 32
        this.#Genero = true
    }*/
    constructor(Nombre,Edad,Genero){
        this.#Nombre = Nombre
        this.#Edad = Edad
        this.#Genero = Genero
    }
    //metodos getter
    get Nombre() {return this.#Nombre}
    get Edad() {return this.#Edad}
    //metodos setter
    set Nombre(valor) {this.#Nombre = valor}
    set Edad(valor) {this.#Edad = valor}
}
//clase Profesional, es una generalizacion o especializacion de 
//Persona
class Profesional extends Persona{
    #Titulo
    getTitulo() {return this.#Titulo}
    constructor(Nombre,Edad,Genero,Titulo){
        super(Nombre,Edad,Genero)
        this.#Titulo = Titulo
    }
}
//clase Empresa... herencais por agregacion
class Empresa{
    #Nombre
    #Gerente
    #Empleados
    constructor(Nombre,Gerente){
        this.#Nombre = Nombre
        this.#Gerente = Gerente
        this.#Empleados = []
    }
    getNombre() {return this.#Nombre}
    getGerente() {return this.#Gerente}
    getNumEmpleados() {return this.#Empleados.length}
    setEmpleado(empleado){ this.#Empleados.push(empleado)}
    getEmpleado(index){ return this.#Empleados[index]}
}


console.log(".... Clase Persona .....")
//creacion de una instancia de la clase persona
var Per01 = new Persona("Felipe", 47, false)
var Per02 = new Persona("Maria", 20, true)
//lectura de los atributos de la instancia por metodos
console.log(Per01.getNombre(), Per01.getEdad(), Per01.getGenero())
//escritura de atributos por metodos
Per01.setNombre("Javier")
//lectura de los atributos de la instancia por metodos
console.log(Per01.getNombre(), Per01.getEdad(), Per01.getGenero())
// usar metodos getter y setter
console.log("getter y setter")
Per01.Nombre = "Luis"
Per01.Edad = 32
console.log(Per01.Nombre, Per01.Edad)

console.log(".... Clase Profesional .....")
//creacion de una instancia de la clase profesional
var Pro01 = new Profesional("Ana", 24, true,"ICG")
//leer atributos por los metodos
console.log(Pro01.getNombre(), Pro01.getEdad(), Pro01.getGenero(),
    Pro01.getTitulo())

console.log(".... Clase Empresa .....")
//creacion de una instancia de la clase empresa
var Emp01 = new Empresa("ICG S.A.",Pro01)
//leer atributos por los metodos
console.log("Nombre de la empresa: ",Emp01.getNombre())
console.log("Gerente: ",Emp01.getGerente().getNombre(),
    Emp01.getGerente().getTitulo())
console.log("Numero de empleados:", Emp01.getNumEmpleados())
Emp01.setEmpleado(Per01)
Emp01.setEmpleado(Per02)
console.log("Numero de empleados:", Emp01.getNumEmpleados())
console.log("empleado indice 0:",Emp01.getEmpleado(0))
console.log("empleado indice 0:",Emp01.getEmpleado(0).getNombre())
