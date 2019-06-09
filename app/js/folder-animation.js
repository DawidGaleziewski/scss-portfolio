const folderCover = document.querySelector('.folder-cover');

const startFolderAnimation = () => {
    const animationContainer = document.querySelector('.folder');
    const sections = document.querySelectorAll('.project');

    // Dynamically establish how low the folder should be moved
    animationContainer.style.transform = `translateY(${calculateSectionsHeight(sections)})`;

    // dynamically establish how long should the folder move
    animationContainer.style.transition = `transform ${1 * sections.length}s`;

    // dynamically establish how long should the folder open/close animation last
    folderCover.style.animation = `open-folder ${1 * sections.length}s ease-out forwards 0s`;


    fadeInSections(sections);

  }


//   dynamically calculate the height of elements and return this value as string with px
  const calculateSectionsHeight = (sections)=> {
    let heightPx = 0;
    sections.forEach((section)=> {
        heightPx += section.offsetHeight;
    })

    return (heightPx + 'px');
  }


// dynamically assign opcaity delay depanding of number of those
const fadeInSections = (sections) => {
    sections.forEach((section, index)=> {
        section.style.animation =`show-section 1s ease-in forwards ${index * 0.5}s`;
    })
}


  // liten for scroll position to trigger animation
  folderCover.addEventListener('click', (event)=>{
    startFolderAnimation();
  })