let contador = 0;

while( contador < 3 ) {
    console.log(contador);
    contador++;
}

do{
    console.log(contador);
    contador++;
}while(contador < 5);
// console.log(contador);

for (let contador2 = 0; contador2 <= 10; contador2++) {
    if (contador2 % 2 !== 0) {
        continue;//ir a la siguiente iteracion
    }
    console.log(contador2);
}

const arry = [1,2,3]

console.log(Array.isArray(arry));