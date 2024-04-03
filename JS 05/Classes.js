
class Persona{

    static contadorPersona = 0;

    static get max_obj(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.max_obj){
            this._idPersona = ++ Persona.contadorPersona;
        }
        else{
            console.log('Excediste el limite');
        }
    }
    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return `${this._idPersona} - ${this._nombre} ${this._apellido}` 
    }
    toString(){
        return `${this.nombreCompleto()}`;
    }
    static saludar(){
        console.log('saludos desde metodo estatico');
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, dep){
        super(nombre, apellido);//LLama al constructor padres
        this._dep = dep;
    }
    get departamento(){
        return this._dep
    }
    set departamento(dep){
        thod._dep = dep;
    }
    nombreCompleto(){
        return `${super.nombreCompleto()} ${this._dep}`;  
    }
}


let persona1 = new Persona('Blood', 'Bound');
console.log(persona1.toString());
// console.log(persona1.nombre);
// persona1.nombre = 'Eco';
// console.log(persona1);
// console.log(persona1.nombre);
let persona2 = new Persona('Hammer', 'Fall');
// console.log(persona2.nombreCompleto());
console.log(persona2.toString());

 let empleado1 = new Empleado('Sword', 'of', 'Damocles');
// console.log(empleado1);
// console.log(empleado1.nombre);
// console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

// Persona.saludar();
// Persona.saludar2(persona1);
// Empleado.saludar();
// Empleado.saludar2(empleado1);

// console.log(Persona.contadorObjetosPersona);
// console.log(Empleado.contadorObjetosPersona);

// console.log(persona1.email)
// console.log(empleado1.email)
let persona3 = new Persona('505', 'Artick Monkeys');
console.log(persona3.toString());
let persona4 = new Persona('Last', 'Train');
console.log(persona4.toString());
let persona5 = new Persona('to', 'London');
console.log(persona5.toString());
console.log(Persona.max_obj);