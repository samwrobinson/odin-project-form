let password = document.querySelector('#user_pass');
let validation = document.querySelector('#pass_confirm')
let button = document.querySelector('#submit');
const userPassword = '';

function validate() {
    if (password === validation) {
        userPassword = validation;
    } else {
        alert('Please provide matching passwords.')
    }
}

button.addEventListener('click', () => {
    validate();
});