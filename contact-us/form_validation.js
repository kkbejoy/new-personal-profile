
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name= document.getElementById('cname').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
}

function validateEmail() {
    var email = document.getElementById('cemail').value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('cmessage').value;
    var required =30;
    var left = required - message.length;

    if(left>0) {
        messageError.innerHTML = left + ' more characters required.';
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
}
