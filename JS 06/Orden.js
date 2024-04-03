class Orden {

    static contadorOrden = 0;
    static getMaximo() {
        return 5;
    }

    constructor(producto){
        this._idOrden = ++ Orden.contadorOrden;
        this._productos = [];
        this._contadorAgregados = 0 ;
    }
    get idOrden(){
        return this._idOrden;
    }
    set idOrden(idOrden){
        this._idOrden = idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.getMaximo){
            this._productos.push(producto);
            // this._productos[this._contadorAgregados++] = producto;
        }else {
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += `${producto.toString()} `;
        }
        console.log(`Orden ${this._idOrden}, Total: ${this.calcularTotal()}, Productos: ${productoOrden}`);
    }
}