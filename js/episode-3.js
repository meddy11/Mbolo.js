function calcule(){
    var capture1 =parseInt(document.getElementById('PremierNb').value);
    var capture2 =parseInt(document.getElementById('SecondNb').value);
    //ADDITION
    if(document.getElementById('r1').checked){
        var addition = capture1 + capture2;
        
        document.getElementById('afficher').innerHTML = addition;
        alert('Le resutat est : '+ addition);
    }
    //SOUSTRATION
    else if(document.getElementById('r2').checked){
        var soustration = capture1 - capture2;
        
        document.getElementById('afficher').innerHTML = soustration;
        alert('Le resutat est : '+ soustration);
    }
    //MULTIPLICATION
    else if(document.getElementById('r3').checked){
        var multiplication = capture1 * capture2;
        
        document.getElementById('afficher').innerHTML = multiplication;
        alert('Le resutat est : '+ multiplication);
    }
    //DIVISION
    else if(document.getElementById('r4').checked){
        var division = capture1 / capture2;
        
        document.getElementById('afficher').innerHTML = division;
        alert('Le resutat est : '+ division);
    }
}





