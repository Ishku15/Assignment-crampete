var navmenu = document.querySelector(".nav-link");
var burger = document.querySelector(".burger-menu");

burger.addEventListener("click" , ()=>{
    navmenu.classList.toggle("active-nav");
    burger.classList.toggle("toggle");
});