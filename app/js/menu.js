const btnBurger = document.getElementById('nav-top-burger');
btnBurger.addEventListener('click', ()=> {
    
    const menu = document.getElementById('nav-menu');
    const menuItems = document.querySelectorAll('.menu .menu__item');
    let fadeInTime
    menu.classList.toggle('toggle-mobile-nav');
    btnBurger.classList.toggle('menu-mobile__burger--toggled');

    menuItems.forEach((menuItem,index)=> {
        if(menuItem.style.animation){
            menuItem.style.animation= '';
        } else{
            menuItem.style.animation = `linkFading 0.5s ease forwards ${index /7 + 1}s`;
        }
    });
    
})