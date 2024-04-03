let miPromesa = new Promise((resolve, reject) => {
    let expresion = true;
    if (expresion) {
        resolve('se resolvio correctamente');
    } else {
        reject('se produjo un error');
    }
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// miPromesa.then(
//     valor => console.log(valor)
// ).catch(
//     error => console.log(error)
// );

// let promesa = new Promise((resolve) => {
//     // console.log('Beyond the Realms of Death')
//     setTimeout(() => {
//         resolve('Saludo, Promesa, setTimeout and Savage')
//     }, 3000);
//     // console.log('End');
// });

// promesa.then( valor => console.log(valor) );



// async function miFuncionconPromesa(){
//     return `Rock Forever`;
// }

// miFuncionconPromesa().then( valor => console.log(valor));

// async function funcionAwait(){
//     let miPromesa = new Promise( resolve => {
//         resolve('Hell Bent For Leather')
//     });
//     console.log(await miPromesa);
// }

// funcionAwait();

async function promesaAAST(){
    console.log('The')
    let promesas = new Promise( resolve => {
        setTimeout(() => {
            resolve('Green Malanishi')
        }, 3000);
    });
    console.log( await promesas);
    console.log('With Two Crowns')
}

promesaAAST();