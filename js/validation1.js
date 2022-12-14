var nameError=document.getElementById('Name-error');
var emailError=document.getElementById('Email-error');
var messageError=document.getElementById('Message-error');
var submitError=document.getElementById('Submit-error');

function validateName(){
    

    if(name.length==0){
        nameError.innerHTML= 'Name is required';
        return false;
    }
    console.log(name.length);

    if(name.length < 0 || name.length > 10){
        nameError.innerHTML='Not valid';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML='Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required=5;
    var left=required-message.length;

    if(left > 0){
        messageError.innerHTML=left+'more character required';
        return false;
    }

    messageError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage()){

        // submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}