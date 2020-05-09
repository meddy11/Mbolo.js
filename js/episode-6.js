function somme(){
    var un = parseInt(document.getElementById('b3').value);
    var deux = parseInt(document.getElementById('b4').value)
    var trois = parseInt(document.getElementById('b5').value);
    
    if (document.getElementById('r6'))
    var sommeFinale = un + deux + trois;
    document.getElementById('reponse'),innerHTML = sommeFinale;
    alert('Le resutat est : '+ sommeFinale);
}