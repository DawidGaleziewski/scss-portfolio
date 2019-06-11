const folderCover = document.querySelector('.folder-cover');

const startFolderAnimation = () => {
    const animationContainer = document.querySelector('.folder');
    let sections = document.querySelectorAll('.project');

    // extand section for the animation
    extandWrapperHeight(sections);

    // fade in the elements
    fadeInSections(sections);

    // Dynamically establish how low the folder should be moved
    animationContainer.style.transform = `translateY(${calculateSectionsHeight(sections)})`;

    // dynamically establish how long should the folder move
    animationContainer.style.transition = `transform ${1 * sections.length}s`;

    // dynamically establish how long should the folder open/close animation last
    const openingTime =  document.querySelector('.projects-wrapper').offsetHeight/1000 * 0.5;
    folderCover.style.animation = `open-folder ${openingTime}s ease-out forwards 0s`;

  }

// Extand the wrapper height
const extandWrapperHeight = (sections) => {
  sections.forEach((section)=> {
    section.style.display ="block";
  })
}

//   dynamically calculate the height of elements and return this value as string with px
  const calculateSectionsHeight = (sections)=> {
    let heightPx = document.querySelector('.projects-wrapper').offsetHeight;
    return (heightPx + 'px');
  }


// dynamically assign opcaity delay depanding of number of those
const fadeInSections = (sections) => {
    sections.forEach((section, index)=> {
      // for each 300px add half a second
        let sectionHeightFallingTime = (section.offsetHeight/1000) * 0.5;
        section.style.animation =`show-section 1s ease-in forwards ${index * 0.5 + sectionHeightFallingTime}s`;
        
    })
}


  // Check if folder is in view
  const isInView = () =>{
      const folder = document.querySelector('.folder');
      const folderHeight = folder.clientHeight;
      const scrollY = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight;
      const scrollPosition = scrollY + windowHeight;
      const folderPosition = folder.getBoundingClientRect().top + scrollY + folderHeight;

      return(scrollPosition >= folderPosition)
 
  }


  const startAnimationOnScroll = ()=> {
    window.addEventListener('scroll', ()=> {

      if(isInView()){
        startFolderAnimation()
      }
    })

  }

  startAnimationOnScroll()

