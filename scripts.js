let password = document.querySelector('#user_pass');
let validation = document.querySelector('#pass_confirm')
let button = document.querySelector('#submit');
const userPassword = '';

function comparePass() {
    if (password.value === validation.value) {
        userPassword = validation;
    } else {
        alert('Please provide matching passwords.')
    }
}

button.addEventListener('click', () => {
    comparePass();
});