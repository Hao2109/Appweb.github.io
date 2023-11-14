const apiUrl = "http://127.0.0.1:9999/";
// import { apiUrl } from "./environment.js";


const form = document.getElementById('reg-form')
form.addEventListener('submit', registerUser)
async function registerUser(event){
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const result = await fetch(`${apiUrl}authen/api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username, password
        })
    }).then((res) => res.json())
    if (result.status === 'OK'){
        alert('Create account success')
    }else {
        alert(result.error)
    }
}