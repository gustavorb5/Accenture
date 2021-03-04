function getReport(){


    
    var p1 = document.getElementById('tCP1').value;
    var p2 = document.getElementById('tCP2').value;
    var p3 = document.getElementById('tCP3').value;
    var trabajoFinal = document.getElementById('tTF').value;
    var examenFinal = document.getElementById('tEF').value;
    
    var promedioParciales = (p1+p2+p3) / 3;    
    var porcentajeParciales = (promedioParciales*55) /100;
    var porcentajeTrabajoFinal = (trabajoFinal*15) /100;
    var porcentajeExamenFinal = (examenFinal*30) /100;
    var total = porcentajeTrabajoFinal + porcentajeExamenFinal + porcentajeParciales;            
             
        
    
    document.getElementById('tPro').value = promedioParciales;
    document.getElementById('tPar').value = porcentajeParciales;
    document.getElementById('tPEF').value = porcentajeExamenFinal;
    document.getElementById('tPTF').value = porcentajeTrabajoFinal
    document.getElementById('tCF').value =total;

} 