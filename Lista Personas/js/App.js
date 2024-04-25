console.log('Moon')
const personas = [
    new Persona('Hell You Call A Dream','Drinkin With Jesus'),
    new Persona('Martirio','Amour'),
    new Persona('Evolve','The Occean')
];

function mostrarPersonas(){
    console.log('');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>` 
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != "" && apellido.value != "" ){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        alert('no hay informacion para agregar');
    }
    
}