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


const animateItem = (domElement)=> {
    const itemToAnimate = domElement;
        if(elementIsInView(domElement)){
            domElement.style.animation = `popup 1s linear 1s forwards`;
        }  
}

window.addEventListener('scroll', ()=> {
    // const tag = document.querySelector('h1')
    // animateItem(tag)
})
