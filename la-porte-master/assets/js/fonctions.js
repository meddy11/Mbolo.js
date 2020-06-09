/**
 * Fonctions de travail
 */
// fonction sur l'évenement click du btnValide
function validationForm(event) {
    
    let testEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let testMdp = /^[^éèàçê][a-zA-Z0-9éèàçê]{8,}/;
    let message = document.querySelector('.message');
    let emailInput = document.getElementsByName("email")[0];
    let passwordInput = document.getElementsByName("pass")[0];
    let form_inscr = document.forms[0];

    //condition sur le formulaire
    /*
        si input email et mot de passe est vide 
    */ 
    if (emailInput.value == '' && passwordInput.value == '')
    {
        event.preventDefault();
        message.classList.add('message-visible');
        message.innerHTML = 'Saisir les champs vides'; 
    }
    /*
        si non verifi si input email contient @ et le . 
     */
    else if(emailInput.value != testEmail)
    {
        event.preventDefault();
        message.classList.add('message-visible');
        message.innerHTML = 'Email est invalide :('; 
    }
    /*
        si non verifi si input mot de passe contient 8caracteres. 
     */
    else if(passwordInput.value != testMdp)
    {
        event.preventDefault();
        message.classList.add('message-visible');
        message.innerHTML = 'Mot de passe est invalide :('; 
    }
    /*
        si les conditions sont respecter change la couleur du formulaire 
     */    
    else
    {
        form_inscr.style.backgroundColor = "#a7ff3342";
    }
}



































