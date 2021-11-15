var menuBar = document.querySelector(".menu__bar");
var navMobile = document.querySelector(".nav__mobile");

menuBar.onclick = function(){
    navMobile.classList.toggle('display-block');
}