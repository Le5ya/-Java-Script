const toggleMenu = () =>{
                  const btnMenu = document.querySelector('.menu'),
                   menu = document.querySelector('menu'),
                   closeBtn = document.querySelector('.close-btn'),
                   menuItems = menu.querySelectorAll('ul>li');

                   const handlerMenu = () => {
                    menu.classList.toggle('active-menu')
                   };
                    //{if(!menu.style.transform || menu.style.transform ===`translate(-100%)`){
                    //  menu.style.transform = `translate(0)`; 
                    //}else{
                    //  menu.style.transform = `translate(-100%)`; 
                    //}
                   //};

                   btnMenu.addEventListener('click', handlerMenu);

                   //closeBtn.addEventListener("click",handlerMenu); 
                   //menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
                   
                   menu.addEventListener("click", ()=>{
                    if (!(menu === event.target)){
                      handlerMenu() 
                    }                                       
                   }); 
                                
                  } ; //end toggleMenu 
                  export default toggleMenu;