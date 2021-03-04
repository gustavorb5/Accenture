const validate = () => {
    let nombre = document.getElementById('registro_nombre').value;
    let email = document.getElementById('registro_email').value;
    let password = document.getElementById('registro_password').value;
    let comentarios = document.getElementById('registro_comentarios').value;


    if(nombre == '' || email == '' || password == '' || comentarios== ''){
        alert('uno de los campos esta vacio');
        return false;
    };

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
      return (true)
    } else{
        alert('email incorrecto');
      return (false);
    };

    if (comentarios.length > 50){
        alert('mucho texto');
        return false;
    }

    var passw=  /^[A-Za-z]\w{7,14}$/;
    if(password.match(passw)) 
{ 
return true;
}
else
{ 
alert('esa es tu contraseña??')
return false;
}
}