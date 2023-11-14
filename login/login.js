// import { apiUrl } from "./environment.js";
const apiUrl = "http://127.0.0.1:5000/";
//console.log('Got the token1')
const form = document.getElementById('login-form-container')
form.addEventListener('submit', login)

//CRUD - Create Retrieve Update Delete - Post Get Put Delete
async function login(event){
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const data = {
        username: username,
        password: password
      };
    var resp

    const result = await fetch(`${apiUrl}api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => { resp = data;})
    .catch(error => { console.error('Error:', error);});

    //console.log('haha:', resp)
    if (resp.success === true){
       // console.log('Got the token', res.message)
        window.location = "http://127.0.0.1:5500/FE/home/index.html"
        window.sessionStorage.setItem("accessToken", resp.accessToken);
        //alert('Success')
    }else {
        //alert('Đăng nhập thất bại')
        document.getElementById('message').innerHTML = "Đăng nhập thất bại"
    }   
}   