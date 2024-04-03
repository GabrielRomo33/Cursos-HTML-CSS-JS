class Cliente extends Persona{

    static contadorCleinte = 0;

    constructor(fechaRegistro){
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