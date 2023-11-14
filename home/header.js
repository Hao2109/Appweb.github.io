// //Đóng, mở menu-bar
// var header = document.getElementById('header');
// console.log(header); 
// var menuBar = document.getElementById('menu-bar');
// // console.log(menuBar)
// var headerHeight = header.clientHeight;
//  menuBar.onclick = function()  {
// console.log(header.clientHeight)
// var isClose = header.clientHeight  === headerHeight;
// console.log(isClose)
// if (isClose){
//     header.style.height = 'auto';
// } 
// else {
//     header.style.height = null;
// }
//  }

// Tự động đóng khi chọn menu-bar
// var menuItems = document.querySelectorAll('.navbar a[href*="#"]');
// for (var i=0; i<menuItems.length; i++) {
//     var menuItem = menuItems[i];
    
//     menuItem.onclick = function() {
//         header.style.height = null; 
//     }
// }
const accessToken = '';
var user;
function checkToken (){
    const token = window.sessionStorage.getItem("accessToken")
    if (!token){
     return false;
    }
    this.accessToken = token;
    return true;
 }
 function logOut() {
    window.sessionStorage.removeItem("accessToken");
    window.location.reload()
 }
 (() => {
    if(checkToken()){
        document.querySelector("#login-btn").classList.add('hide');
        document.querySelector("#loged-btn").classList.remove('hide'); 
        document.querySelector("#loged-btn").classList.add('show'); 
        document.querySelector('#logout-btn').classList.remove('hide'); 
        document.querySelector('#logout-btn').classList.add('show'); 
        this.user = JSON.parse(atob(this.accessToken.split('.')[1]));
        document.querySelector("#loged-btn").append(this.user.username)  
        return;  
    }
 })()
