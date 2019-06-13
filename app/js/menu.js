const toggleMobileNav = ()=> {
    const menu = document.getElementById('nav-menu');
    const menuItems = document.querySelectorAll('.menu .menu__item');
    menu.classList.toggle('toggle-mobile-nav');
    btnBurger.classList.toggle('menu-mobile__burger--toggled');

    menuItems.forEach((menuItem,index)=> {
        if(menuItem.style.animation){
            menuItem.style.animation= '';
        } else{
            menuItem.style.animation = `linkFading 0.5s ease forwards ${index /7 + 1}s`;
        }
    });
}

const btnBurger = document.getElementById('nav-top-burger');
btnBurger.addEventListener('click', ()=> { 
    toggleMobileNav()
})

const menuButtons = document.querySelectorAll('.menu__item');
menuButtons.forEach((button)=>{
    button.addEventListener('click', ()=> {
        toggleMobileNav()
    })
})




