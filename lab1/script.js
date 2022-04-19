
const submit = document.getElementById("submitButton");
submit.addEventListener("click", function(){
    alert("New hookah shop have opened!");
});

function checkingPswrd(){
    const pswrd=document.querySelector('input[id=newpassword]');
    const confirm = document.querySelector('input[id=confirm]');
    if (confirm.value===pswrd.value) {
        confirm.setCustomValidity('');
    }
    else{
        confirm.setCustomValidity('Password doesn`t match');
    }
}
function saveRegistered() {
    var registeredLogins = [];
    var registeredEmail = [];
    var login = document.querySelector('#newLogin').value;
    var email = document.querySelector('#newEmail').value;
    registeredLogins.push(login);
    registeredEmail.push(email);
    alert("New user registered\n\n" +"Login: " + login+ "\nEmail: "+ email);
    return true;
}
function fakeAuth(){
    alert('Authorization successful!');
    const element = document.getElementById("auth");
    element.remove();
    return true;
}