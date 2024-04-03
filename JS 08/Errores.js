"use strict"

try {
    let x = 10;
    throw 'Error 404';
} catch(error){
    console.log(error);
} finally {
    console.log('Dreamer Deceiver');
}

let resultado  = -9;

try {
    // isNaN(resultado) ?  'Genocide' : throw 'No es un numero'
    // x = 19;
    if( isNaN(resultado) ) throw 'No es un numero';
    else if( resultado === '') throw 'Es una cadena vacia';
    else if( resultado >= 0 ) throw 'Es un valor positivo';
    else if( resultado < 0 ) throw 'Es un valor negativo';
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log('Invincible Shield');
}