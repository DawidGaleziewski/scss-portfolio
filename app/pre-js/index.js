// Main javascript file
    //1. import modules
    import Preloader from './modules/preloader';
    import Menu from './modules/menu.js';
    import FolderAnimation from './modules/folder-animation.js';
    import PopupAnimation from './modules/popup-animation';





    //2. create objects
    const menu = new Menu;
    const preloader = new Preloader;
    const folderAnimation = new FolderAnimation;
    const popupAnimation = new PopupAnimation;

  
    
    //3. start module
    preloader.start();
    menu.start();
    folderAnimation.start();
    popupAnimation.start()
    