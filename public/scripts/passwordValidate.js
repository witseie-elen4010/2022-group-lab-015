'use strict'


const form = document.getElementById('accountForm')
form.addEventListener('input', () => {
    const pass = document.getElementById('password').value
    const passVal = document.getElementById('Rpassword').value
    const acceptTerms = document.getElementById('terms')
    const formBtn = document.getElementById('createAccount')

    if (pass === passVal && acceptTerms !== null){
        formBtn.removeAttribute('disabled')
    } else {
        formBtn.setAttribute('disabled', 'disabled')
    }
})
