
class Persona {

    static contadorPersona = 0;

    constructor( Nombre, Apellido, Edad){
        this._idPerosna = ++ Persona.contadorPersona;
        this._Nombre = Nombre;
        this._Apellido = Apellido;
        this._Edad = Edad;
    }

    get idPersona(){
        return this._idPerosna;
    }
    set idPersona(idPersona){
        this._idPerosna = idPersona;
    }

    get Nombre(){
        return this._Nombre;
    }
    set Nombre(Nombre){
        this._Nombre = Nombre;
    }
    get Apellido(){
        return this._Apellido;
    }
    set Apellido(Apellido){
        this._Apellido = Apellido;
    }
    get Edad(){
        return this._Edad;
    }
    set Edad(Edad){
        this._Edad = Edad;
    }
    
    toString(){
        return `${this._idPerosna} - ${this._Nombre} ${this._Apellido} ${this._Edad} años`
    }
}

class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor( nombre, apellido, edad, Sueldo)    {
        super(nombre, apellido, edad);
        this._idEmpleado = ++ Empleado.contadorEmpleado;
        this._Sueldo = Sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    set idEmpleado(idEmpleado){
        this._idEmpleado = idEmpleado;
    }
    get Sueldo(){
        return this._Sueldo;
    }
    set Sueldo(Sueldo){
        this._Sueldo = Sueldo;
    }
    toString(){
        return `${super.toString()} ${this._idEmpleado} - $${this._Sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorCleinte = 0;

    constructor(nombre, apellido, edad ,fechaRegistro){
        super(nombre, apellido, edad);
        this._idCleinte = ++ Cliente.contadorCleinte;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCleinte;
    }
    set idCliente(idCliente){
        this._idCliente = idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `${super.toString()} ${this._idCleinte} - ${this._fechaRegistro}`
    }
}

//Pruebas clase perosna 
let person1 = new Persona('Axl', 'Rose', 39);
console.log(person1.toString());
let person2 = new Persona('Frank', 'Ferrer', 28);
console.log(person2.toString());
let empleado1 = new Empleado('DJ', 'Asbha', 24, '8,500')
console.log(empleado1.toString());
let empleado2 = new Empleado('Ron', 'Boomblefoot', 24, '17,600')
console.log(empleado2.toString());
let cliente1 = new Cliente('Richard', 'Rodhes', 25, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente('Izzy', 'Stradlin', 35, new Date());
console.log(cliente2.toString());