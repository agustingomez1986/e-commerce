import { serviciosCRUD } from "./servicios/serviciosCRUD.js";

const formulario = document.querySelector("[data-formEditarProducto]");

const obtenerInformcion = async()=>{
   const url = new URL(window.location);
   const id = url.searchParams.get("id");
   
   if(id == null){
      alert("Error de ID = null");
   }

   const imagen = document.querySelector("#imagenProducto");
   const bannerImage = document.getElementById('vistaPreviaImagenProducto');
   const categoria = document.querySelector("#categoriaProducto");
   const nombre = document.querySelector("#nombreProducto");
   const precio = document.querySelector("#precioProducto");
   const descripcion = document.querySelector("#descripcionProducto");

   try{
      const item = await serviciosCRUD.datoProducto(id);
      item.forEach(({imagenProducto, categoriaProducto, nombreProducto, precioProducto, descripcionProducto})=>{
         if(imagenProducto && categoriaProducto && nombreProducto && precioProducto && descripcionProducto){

            /* -- PARA USAR LAS IMAGENES DE LA CARPETA ASSETS --
            const regex = /.\/assets\/img\//i
            const imagenModificada = item.imagenProducto.replace(regex, '');

            const myFile = new File(["Hello"], imagenProducto, {
               type: 'text/plain',
               lastModified: new Date(),
            });

            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(myFile);
            imagen.files = dataTransfer.files;
            */

            // -- EL "data:image/png;base64,"+ SE USA EN IMAGEN PASADA A TEXTO --
            imagen.value = imagenProducto;
            bannerImage.src = /*"data:image/png;base64,"+*/imagenProducto; 
            categoria.value = categoriaProducto;
            nombre.value = nombreProducto;
            precio.value = precioProducto;
            descripcion.value = descripcionProducto;
            
         }else{
            throw new Error("Error de try al editar producto");
         }
      })
   }catch(error){
      alert("Error de catch al editar producto")
   }
};

obtenerInformcion();

formulario.addEventListener("submit", (evento)=>{
   evento.preventDefault();
   const url = new URL(window.location);
   const id = url.searchParams.get("id");
   const imagen = document.querySelector("#imagenProducto").value;
   const categoria = document.querySelector("#categoriaProducto").value;
   const nombre = document.querySelector("#nombreProducto").value;
   const precio = document.querySelector("#precioProducto").value;
   const descripcion = document.querySelector("#descripcionProducto").value;

   // -- PARA PASAR LA IMAGEN A TEXTO --
   //const bannerImage = document.getElementById('vistaPreviaImagenProducto');
   //const imagen = imagenBase64(bannerImage);

   // -- PARA USAR LAS IMAGENES DE LA CARPETA ASSETS --
   //const regex = /C:\\fakepath\\/i
   //const imagenModificada = imagen.replace(regex, './assets/img/');

   serviciosCRUD.actualizarProducto(imagen, categoria, nombre, precio, descripcion, id)
      .then(()=>{
         window.location.href = "./administrador.html";
   });
})