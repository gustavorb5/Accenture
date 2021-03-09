const cantidad = document.getElementById("cantidad");
const tarjeta = document.getElementById("tarjeta");
const cuotas = document.getElementById("cuotas");
const codigoDesc = document.getElementById("descuento");
const sigue = document.getElementById("sigue");
const formularioCompra = document.getElementById("formularioCompra");
const precioP1 = 1400;
const precioP2 = 800;
const dropdown = document.getElementById('dropdown');



const tieneTarjeta = () => {
    tarjeta.onchange = () => {
        if (tarjeta.checked == true) {document.getElementById('answer').style.display = 'inline';}
        else {document.getElementById('answer').style.display = 'none';
        }
      }
};

formularioCompra.addEventListener("submit", (e) => {
   e.preventDefault();
   // console.log(tarjetaCredito.value); // No esta funcionando
   const calcularPrecio = () => {
      let precioFinal = precioP1 * cantidad.value;
      alert(
         `El precio x unidad es de ${precioP1}, y precio final sera de ${precioFinal}`
      );
   };

   calcularPrecio();
});