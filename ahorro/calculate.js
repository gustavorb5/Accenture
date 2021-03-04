function calculate() {
    
    var deposito = document.getElementById('deposito').value;
    var interes = document.getElementById('interes').value / 100 / 12;
    var meses = document.getElementById('meses').value;

    
    var x = Math.pow(1 + interes, meses);
    var mensual = (deposito*x*interes)/(x-1);

    
    if (!isNaN(mensual) && 
        (mensual != Number.POSITIVE_INFINITY) &&
        (mensual != Number.NEGATIVE_INFINITY)) {

        document.getElementById('mensual').value = round(mensual);
        document.getElementById('total').value = round(mensual * meses);

    }
    
    else {
        document.getElementById('mensual').value = "";
        document.getElementById('total').value = "";
    }
}


function round(x) {
  return Math.round(x*100)/100;
}