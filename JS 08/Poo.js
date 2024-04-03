
class Empleado {
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, Sueldo: ${this.sueldo}`
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto. ${this.departamento}`;
    }
}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    // if(tipo instanceof Gerente){
    //     console.log('es un objeto de Tipo Empleado'); 
    // }
    tipo instanceof Gerente ? 
    console.log('es un objeto de Tipo Gerente') : 
    console.log('es un objeto de Tipo Empleado');
}

let gerente1 = new Gerente('Glenn',500,'Sistemas');
// console.log(gerente1.obtenerDetalles());
imprimir(gerente1);
let Empleado1 = new Empleado('Rob',900,);
// console.log(gerente2.obtenerDetalles());
imprimir(Empleado1);