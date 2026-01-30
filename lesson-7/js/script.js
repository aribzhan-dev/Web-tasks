const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const formBtn = document.getElementById('btn');


inputUsername.addEventListener('input', function() {
    if (inputUsername.ariaValueMax.length  < 6){
        console.log('Username must be at least 6 characters long');
    }
})