const button = document.querySelector('.create-button');
const password = document.querySelector('#password');
const check = document.querySelector('#confirm');
const message = document.querySelector('.error-message')
button.addEventListener('click', (e) => {
    e.preventDefault();
    if(password.value !== check.value) {
        password.classList.add('error');
        check.classList.add('error');
        message.style.display='unset'
    } else {
        password.classList.remove('error')
        check.classList.remove('error')
        message.style.display='none';
    }
})