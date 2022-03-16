
let loginForm = document.getElementById('login');
let registerForm = document.getElementById('register');
let toggleBtn = document.getElementById('button');

function register(){
    
    loginForm.style.left = '-400px';
    registerForm.style.left = '50px';
    toggleBtn.style.left = '110px';
}

function login(){
 
    loginForm.style.left = '50px';
    registerForm.style.left = '450px';
    toggleBtn.style.left = '0px';
}


