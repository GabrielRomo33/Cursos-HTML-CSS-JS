
// let x = function (a,b){
//     return a+b;
// }

// resultado = x(1,2);
// console.log(resultado);

// // (function (a,b){
// //     console.log(`Giants in the Sky ${ a + b}`);
// // })(3,4);

// const sumar = (a,b) => a+b;
// console.log(sumar(3,3));

// let resultado = sumarTodo(5,4,13,10,9);

// function sumarTodo(){
//     let suma = 0;
//     for(let i = 0; i < arguments.length; i++){
//         suma += arguments[i]
//     }
//     return suma
// }

// console.log(resultado);

let x = 10;

function cambiarValor(a){
    console.log(a);
    a = 20;
    x = a;
}

cambiarValor(x);

console.log(x);


const persona = {
    Nombre: 'Rob',
    Apellido: 'Halford'
}

function cambiarValorObjeto(person){
    person.Nombre = 'Ian';
    person.Apellido = 'Hill';
}

cambiarValorObjeto( persona );

console.log(persona);