const nombre = document.getElementById("name");
const email = document.getElementById("email");
const dni = document.getElementById("dni");
const edad = document.getElementById("birthday");
const formulario = document.getElementById("contact");

formulario.addEventListener("submit", a =>{
    a.preventDefault();
    const errorMessage = 'Dato incorrecto';
    const validarDni = /^\d{8}(?:[-\s]\d{4})?$/.test(dni);
    if (!validarDni || dni.value < 0 || dni.value > 99999999) {
        alert(errorMessage);
        return; }
    const validarEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    if(!validarEmail){
        alert(errorMessage);
        return;
    }
    if (nombre.value.length > 30 || nombre.value.length == 0) {
        alert(errorMessage);
        return;
     }
    
     window.location.replace(
        "file:///C:/Users/Gustavo/OneDrive/Escritorio/indexx.html"
     );
})