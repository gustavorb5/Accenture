const calcularPrecio = () =>{
    let codigo = document.getElementById('codigo').value;
    let auto = 'Ford ';
    let descuento = 0;
    let precio = 0;
    let precioFinal = 0;
    if(codigo === 11450){
        auto += 'Fiesta';
        precio = 1350344;
        descuento = precio * 5/100;
        precioFinal= precio - descuento;
    } else if(codigo === 11451){
        auto += 'Ka';
        precio = 1750502;
        descuento = precio * 10/100;
        precioFinal= precio - descuento;
    } else{
        alert('revisa bien el codigo que pusiste');
    }
    document.getElementById('precio').value = `El codigo del auto ${codigo} pertenece al vehiculo ${auto} cuyo valor queda estimado en un $${precioFinal} luego de un descuento del ${(descuento*100)/precioFinal}`;
}