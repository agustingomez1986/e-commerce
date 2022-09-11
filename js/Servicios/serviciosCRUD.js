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

const eliminarProducto = (id)=>{
    return fetch(`https://alurageekecommercedb.herokuapp.com/productos/${id}`, {
        method: "DELETE"
    });
}

const datoProducto = (id)=>{
    return fetch(`https://alurageekecommercedb.herokuapp.com/productos/${id}`).then((respuesta)=> respuesta.json());
}

const actualizarProducto = (imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto, id)=>{
    return fetch(`https://alurageekecommercedb.herokuapp.com/productos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto}),
        })
        .then((respuesta)=> console.log(respuesta))
    .catch((err)=> console.log.apply(err));
}

export const serviciosCRUD = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    datoProducto,
    actualizarProducto,
}