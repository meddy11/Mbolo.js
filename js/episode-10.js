var montant = prompt("entrez le montant de votre facture");
var x = 10;
var z = 100;
if(montant > 40000){
    var operation = montant * x / z;
    var remise = montant - operation; 
    alert("votre remise est de : "+ remise);
} else if(montant <= 40000){
    alert("vous avez pas de remise  :( " + montant);
}
