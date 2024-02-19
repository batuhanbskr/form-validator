const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling; // ulaştığımız elementin bir sonraki elementi
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function passwordMatch(password, repassword) {
    if (password === repassword) {
        success(password, repassword);
    } else {
        error(repassword, 'Parolalar eşleşmiyor');
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalı`)
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalı`)
    } else {
        success(input);
    }
}

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required`);
        } else {
            success(input);
        }
    })

}
form.addEventListener('submit', function (e) {
    e.preventDefault(); // varsayılan özelliği kapatıyoruz
    checkRequired([username, email, password, repassword]);
    checkLength(username, 7, 15);
    checkLength(password, 7, 12);
    passwordMatch(password, repassword);
});