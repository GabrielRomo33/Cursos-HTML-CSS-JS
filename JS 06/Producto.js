class Producto {

    static contadorProductos = 0;

    constructor(Nombre, Precio){
        this._Nombre = Nombre;
        this._Precio = Precio;
        this._idProducto = ++ Producto.contadorProductos;
    }
    get idProducto(){
        return this._idProducto;
    }
    // set idProducto(idProducto){
    //     this._idProducto = idProducto;
    // }
    get Nombre(){
        return this._Nombre;
    }
    set Nombre(Nombre){
        this._Nombre = Nombre;
    }
    get Precio(){
        return this._Precio;
    }
    set Precio(Precio){
        this._Precio = Precio;
    }
    toString(){
        return `${this._idProducto} - ${this._Nombre} $${this._Precio} `;
    }
}


class Orden {

    static contadorOrden = 0;
    static get Maximo() {
        return 5;
    }

    constructor(){
        this._idOrden = ++ Orden.contadorOrden;
        this._productos = [];
        // this._contadorAgregados = 0 ;
    }
    get idOrden(){
        return this._idOrden;
    }
    // set idOrden(idOrden){
    //     this._idOrden = idOrden;
    // }

    agregarProducto(producto){
        if(this._productos.length < Orden.Maximo){
            this._productos.push(producto);
            // this._productos[this._contadorAgregados++] = producto;
        }else {
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.Precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += `\n${producto.toString()} `;
        }
        console.log(`Orden ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productoOrden}`);
    }
}

console.log('As god is my witness');


let producto1 = new Producto('Guitarra', 60);
let producto2 = new Producto('Bajo', 40);
let producto3 = new Producto('Microfono', 50);

let orden = new Orden();

orden.agregarProducto(producto1);
orden.agregarProducto(producto2);
orden.mostrarOrden();


let orden2 = new Orden();

orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();