
class DispositivoEntrada {
    constructor(tipoEntrada, marca){
        this._tipoEndtrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEndtrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEndtrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++ Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [ idRaton: ${this._idRaton} - Tipo entrada: ${this.tipoEntrada}, Marca: ${this.marca} ]`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTecaldo = ++ Teclado.contadorTeclados;
    }
    get idTecaldo(){
        return this._idTecaldo;
    }
    toString(){
        return `Teclado: [ idTeclado: ${this._idTecaldo} - Tipo entrada: ${this.tipoEntrada}, Marca: ${this.marca} ]`;
    }
}

class Monitor {
    static contadorMonitores = 0;
    constructor(marca,tamanio){
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    
    toString(){
        return `Monitor: [ idMonitor: ${this._idMonitor} -  Marca: ${this._marca}, Tamanio: ${this._tamanio} ]`;
    }
}
//En primera compra
class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++ Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora: ${this._idComputadora} - ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden {
    static contaodrOrdenes = 0;
    constructor(){
        this._idOrden = ++ Orden.contaodrOrdenes;
        this._compputadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._compputadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._compputadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`orden: ${this._idOrden}, computadoras ${computadorasOrden}`);
    }
}

let raton1 = new Raton('USB', 'HP');
let raton2 = new Raton('Bluethoot', 'DELL');
console.log(raton1.toString());
console.log(raton2.toString());
let teclado1 = new Teclado('USB', 'HP');
let teclado2 = new Teclado('Bluethoot', 'DELL');
console.log(teclado1.toString());
console.log(teclado2.toString());
let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 25);
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
let computadora2 = new Computadora('HP', monitor2, raton2, teclado2);
console.log(computadora1.toString());
console.log(`${computadora2}`);

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();
let orden2 = new Orden();

orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();
