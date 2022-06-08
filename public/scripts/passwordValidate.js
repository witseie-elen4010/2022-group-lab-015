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

const modal = document.getElementById('createAccount')
const modalbtn = document.getElementById('modalbtn')
modal.addEventListener('click', () => {
    setTimeout (function () {
        modal.style.display = 'block'
        let msg = document.createElement('h2')
        msg.innerHTML = `New account created. <br>You will be redirected
        to the login page soon.`
        modal.appendChild(msg)
    })
})


