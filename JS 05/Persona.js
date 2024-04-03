
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