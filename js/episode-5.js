function doucle(){
    var nmBer = parseInt(document.getElementById('b1').value);
    var nmBr = parseInt(document.getElementById('b2').value);

    if(document.getElementById('r')){
        
        var multiplication = nmBer * nmBr;
        document.getElementById('resultat'),innerHTML = multiplication;
        alert('Le resutat est : '+ multiplication);

    }
}
