  // Check if element is in view
  const elementIsInView = (domElement) =>{
    const element= domElement;
    const elementHeight = element.clientHeight;
    const scrollY = window.scrollY || window.pageYOffset
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollY + windowHeight;
    const elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    return(scrollPosition >= elementPosition)
}


const animateItem = (domElement, delay)=> {
    const itemToAnimate = domElement;
    if(elementIsInView(itemToAnimate)){
        itemToAnimate.style.animation = `popup 1s linear ${delay}s forwards`;
    }  
}

window.addEventListener('scroll', ()=> {
    const stackLists = document.querySelectorAll('.stack-list__item');
    stackLists.forEach((stackList, index)=> {
        animateItem(stackList, (index * 0.5))
    })
})
