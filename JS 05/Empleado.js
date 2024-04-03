class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor( Sueldo)    {
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