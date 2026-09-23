const defaultusername = 'ghost';
const defaultpassword = '1234';

document.getElementById('loginform').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errormessage = document.getElementById('errormessage');
    const logincontanier = document.getElementById('logincontanier');
    const successmessage = document.getElementById('succesmessage');

    if (username === defaultusername && password === defaultpassword) {
        errormessage.textContent = '';
        logincontanier.style.display = 'none';
        successmessage.style.display = 'block';
    } else {
        errormessage.textContent = 'invalid username or password';
    }
});