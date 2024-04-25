console.log('One Shot of Glory');

function sumar() {
    const forma = document.getElementById('formula');
    let A = forma['A'];
    let B = forma['B'];
    let resultado = parseInt(A.value) + parseInt(B.value);
    if(isNaN(resultado)){
        resultado = 'Error!!'
    }
    document.getElementById('resultado').innerHTML = `Resultado ${resultado}`;
}