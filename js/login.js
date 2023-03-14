// step-1 
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2 get the email address
    const emailField= document.getElementById('user-email');
    const email = emailField.value;
    // step-3 get password
    const passwordField = document.getElementById('user-password');
    const password= passwordField.value;
    
    // do not verify in client site
    if (email==='ifty@gmail.com' && password === 'amitotakanibo'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid user');
    }
})