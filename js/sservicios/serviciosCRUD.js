const listaProductos = ()=> fetch("https://alurageekecommercedb.herokuapp.com/productos")
                            .then((respuesta)=> respuesta.json());

const crearProducto = (imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto) =>{
    return fetch("https://alurageekecommercedb.herokuapp.com/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imagenProducto,
            categoriaProducto,
            nombreProducto,
            precioProducto,
            descripcionProducto,
            id: uuid.v4()
        }),
    });
};

const eliminarProducto = async (id)=>{
    try{
        await fetch(`https://alurageekecommercedb.herokuapp.com/productos/${id}`, {
            method: "DELETE"
        });
        window.location.reload();
    } catch { console.log("Error de catch al eliminar producto")}
}

const datoProducto = async (id) => {
    try {
        const respuesta = await fetch(`https://alurageekecommercedb.herokuapp.com/productos?id=${id}`);
        const productoID = respuesta.json();
        return productoID;
                //.then((respuesta)=> respuesta.json());
    } catch (error) { console.log("Error de catch al traer datos de productos")}
}

const actualizarProducto = async (imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto, id)=>{
    try{
        const respuesta = await fetch(`https://alurageekecommercedb.herokuapp.com/productos/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto}),
        })

        const productoID = repsuesta.json();
        return productoID;
    } catch {(err)=> console.log("Error de catch al actualizar producto")};
}

export const serviciosCRUD = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    datoProducto,
    actualizarProducto,
}