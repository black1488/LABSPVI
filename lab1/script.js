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