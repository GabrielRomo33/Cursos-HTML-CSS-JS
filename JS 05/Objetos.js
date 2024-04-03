
let person1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        // return `${this.nombre} ${this.apellido}`;
        return `${this.nombre} ${this.apellido}, ${titulo}, ${tel}`;
    }
}
let person2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

console.log(person1.nombreCompleto('Ing','213131657'));

let arr = ['ING','6845848846']
console.log(person1.nombreCompleto.apply( person2, arr));


// function nuevaPersona(nombre, apellido, email){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.email = email;
//     this.nombreCompleto = function(){
//         return `${this.nombre} ${this.apellido}`
//     }
// }

// nuevaPersona.prototype.tel = '8341541209'
// let padre = new nuevaPersona('Paradise','City','Appetitte86@gmail.com')
// console.log(padre.nombreCompleto());
// console.log(padre.tel);

// let madre = new nuevaPersona('May','Michelle','Desctuction@gmail.com');
// madre.tel = '899047833'
// console.log(madre.nombreCompleto());
// console.log(madre.tel);

// let persona1 = {
//     nombre: 'Blood',
//     Apellido: 'Metalizaer',
//     correo : 'Could14@gmail.com',
//     edad: 72,
//     idioma: 'es',
//     get lang(){
//         return this.idioma.toUpperCase();
//     },
//     set lang(lang){
//         this.idioma = lang.toUpperCase();
//     },
//     get nombreCompleto() {
//         return `${this.nombre}  ${this.Apellido}`
//     }
// }


// console.log(persona1.nombreCompleto);

// persona1.lang = 'en';

// console.log(persona1.lang);



// console.log(persona1.nombre);
// console.log(persona1.Apellido);
// console.log(persona1.correo);
// console.log(persona1.edad);
// console.log(persona1.nombreCompleto());
// console.log(persona1);

// //14, 26 marzo 16 al 3 julio 
// let persona2 = new Object();
// persona2.nombre = 'Battle'
// persona2.Apellido = 'Cry'
// persona2.Direccion = 'BattleField'
// persona2.tel = '83420140510'

// console.log(persona2);
// console.log(persona1['nombre']);

// for(propiedad in persona1 ){
//     console.log(propiedad);
//     console.log(persona1[propiedad]);
// }
