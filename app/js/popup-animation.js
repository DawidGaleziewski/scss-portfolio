  // Check if element is in view
  const elementIsInView = (elementSelector) =>{
    const element= document.querySelector(elementSelector);
    const elementHeight = element.clientHeight;
    const scrollY = window.scrollY || window.pageYOffset
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollY + windowHeight;
    const elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    return(scrollPosition >= elementPosition)
}

window.addEventListener('scroll', ()=> {
    const sectionStackList = document.querySelectorAll('.stack-list');
    if(elementIsInView('.stack-list')){
        const itemList = document.querySelectorAll('.stack-list__item');
        itemList.forEach((item, index)=> {  
            item.style.animation = `popup 1s linear ${0.5 * index}s forwards`;
        })
    }   
})