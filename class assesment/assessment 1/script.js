const menu = document.querySelector(".burger-menu");
const list = document.querySelector(".menu");
var toggle=0;
menu.addEventListener('click', () =>{
    if (toggle == 1)
        {
            list.classList.remove("toggled");
            toggle=0;
            menu.classList.toggle('toggle');
        }
    else
        {
            list.classList.add("toggled");
            menu.classList.toggle('toggle');
            toggle=1;
        }
});