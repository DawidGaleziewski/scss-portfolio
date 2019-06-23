class Preloader{
    start(){
        window.addEventListener('load', ()=> {
            const preloader = document.querySelector('.preloader');
            preloader.classList.add('stop-preloader')
        
        })
    }
}

export default Preloader;
