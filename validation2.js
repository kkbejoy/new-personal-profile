/*
var nameError = document.getElementById('name');
var emailError = document.getElementById('email');
var messageError = document.getElementById('message');
var submitError = document.getElementById('submit');


function validateName() {
    var name= document.getElementById('cname').value;

    if(name.length == 0){
        
        return false;
    }
    if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
            return false;
    }else{
        return true;
    }
    
       
}

function validateEmail() {
    var email = document.getElementById('cemail').value;

    if(email.length == 0) {
        
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        
        return false;
    }
    else{
        return true;
    }
        
}

function validateMessage() {
    var message = document.getElementById('cmessage').value;
    var required =30;
    var left = required - message.length;

    if(left>0) {
       
        return false;
    } else {
        messageError.innerHTML = 'Enter a valid message';
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validateMessage() || !validateEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix all errors to submit.';
        setTimeout(function() {submitError.style.display = 'none';}, 3000);
        return false;
    }
}*/