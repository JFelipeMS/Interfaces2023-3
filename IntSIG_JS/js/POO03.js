//Clases Abstractas
class Figura2D {
    _tipo //atributo protegido ... no publico no privado
    constructor() {
        if(new.target === Figura2D){
            throw new TypeError("Esto no se puede instanciar")
        }
        this._tipo = "Mi Figura2D es un "
    }
    getArea(){
  throw new TypeError("Debe implementar este metodo en su tipo")} 
    getPeri(){
  throw new TypeError("Debe implementar este metodo en su tipo")}    
    getTipo(){ return this._tipo}
}
//creacion de Tipos
class Circulo extends Figura2D{
    constructor(radio){
        super()
        this._Radio = radio
        this._tipo += "Circulo"
    }
    getArea(){ return Math.PI * this._Radio * this._Radio}
    getPeri(){ return 2 * Math.PI * this._Radio}
}
class Cuadrado extends Figura2D{
    constructor(lado){
        super()
        this._Lado = lado
        this._tipo += "Cuadrado"
    }
    getArea(){ return this._Lado * this._Lado}
    getPeri(){ return this._Lado * 4}
}
class Rectangulo extends Figura2D{
}
//var mifigura = new Figura2D()
var miCir = new Circulo(2)
console.log(miCir.getTipo())
console.log("Area:",miCir.getArea(),"Perimetro:",miCir.getPeri())