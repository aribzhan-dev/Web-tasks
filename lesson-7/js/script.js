const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const formBtn = document.getElementById('btn');


formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (inputUsername.value.length < 6) {
        console.log('Username must be at least 6 characters long');
    }
    if (!inputEmail.value.includes('@')) {
        alert('Email is not valid!! Enter a valid email address.');
    }
})