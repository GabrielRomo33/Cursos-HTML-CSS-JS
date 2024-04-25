console.log('Behind Blue Eyes');

const ingresos = [
    new Ingreso('Sueldo',2100.00),
    new Ingreso('Venta coche', 1500.00)
];
const egresos = [
    new Egreso('Renta',900.00),
    new Egreso('Ropa', 400.00)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngreso = () => {
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgreso = () => {
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () => {
    let presupuesto = totalIngreso() - totalEgreso();
    let porcentajeEgreso = totalEgreso()/totalIngreso();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngreso());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgreso());
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-us',{ style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 });
}

const cargarIngresos = () => {
    let ingresoHTML = '';
    for(let ingreso of ingresos){
        ingresoHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresoHTML;
}
const cargarEgresos = () => {
    let egresoHTML = '';
    for(let egreso of egresos){
        egresoHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresoHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <!-- <ion-icon name="close"></ion-icon> -->
                <ion-icon name="close-circle" Onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>`;
return ingresoHTML
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilo">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgreso())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle" Onclick='eliminarEgreso(${egreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>`;
return egresoHTML
}

const eliminarIngreso = (id) => {
    let IndiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id);
    ingresos.splice(IndiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const eliminarEgreso = (id) => {
    let IndiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(IndiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = document.getElementById('tipo');
    let descripcion = document.getElementById('descripcion');
    let valor = document.getElementById('valor');
    if(descripcion !== '' && valor !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        } else if (tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}
