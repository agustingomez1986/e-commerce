
function readURL(input){
   const imagenProducto = document.querySelector("#imagenProducto").value;
   document.getElementById("vistaPreviaImagenProducto").src = imagenProducto;
   
   /* -- PARA PASAR IMAGENES A TEXTO --
   document.getElementById("vistaPreviaImagenProducto").style.display = "block";
   
   if (input.files && input.files[0]){
      var reader = new FileReader();
      reader.onload = function(e){
         document.getElementById('vistaPreviaImagenProducto').src = e.target.result;
      }
      
      reader.readAsDataURL(input.files);
   }
   */
}
   
/* -- PARA PASAR IMAGENES A TEXTO --
function imagenBase64(img){
   var canvas = document.createElement("canvas");
   canvas.width = img.width;
   canvas.height = img.height;

   var ctx = canvas.getContext("2d");
   ctx.drawImage(img, 0, 0);

   var dataURL = canvas.toDataURL("image/png");
   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
*/