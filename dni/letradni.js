const averiguarDNI = () => {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let dniUsuario = document.getElementById('dni').value;
    let letraUsuario = document.getElementById('letra').value.toUpperCase();
    let letraDNI = '';

    if(dniUsuario<=0 && dniUsuario>99999999){
        alert('DNI Invalido');
    } else{
        let num = Math.round(dniUsuario%23);
        letraDNI= letras[num];
        if(letraDNI === letraUsuario){
            alert('la has embocado, enhorabuena');
        } else{
            alert('te has equivocado chaval');
        }
    }
}