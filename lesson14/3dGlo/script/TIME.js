window.addEventListener('DOMContentLoaded', function() {
 'use strict';

// Timer
function countTimer(deadline) {
  let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {
       let dateStop = new Date(deadline).getTime(),
           dateNow = new Date().getTime(),
           timeRemaining = (dateStop - dateNow) / 1000,
           seconds = Math.floor(timeRemaining % 60),
           minutes = Math.floor((timeRemaining / 60) % 60),
           hours = Math.floor(timeRemaining / 60 /60 );
           return{timeRemaining, hours, minutes,seconds};
            }
        
              function updateClock() {
                let timer = getTimeRemaining();

                timerHours.textContent = timer.hours;
                timerMinutes.textContent = timer.minutes;
                timerSeconds.textContent = timer.seconds;
                let nulStr = `0`
                 if (+timer.hours < 10){
                  timerHours.textContent = `${nulStr}${timer.hours}`;
                         }
                 if (+timer.minutes < 10){
                   timerMinutes.textContent = `${nulStr}${timer.minutes}`;
                    }
                 if (+timer.seconds < 10){
                     timerSeconds.textContent = `${nulStr}${timer.seconds}`;
                      }
                   if(timer.timeRemaining > 0){
                   setTimeout(updateClock, 1000);
                        }
                    if(timer.timeRemaining < 0){
                  clearTimeout();
                 }
                
                  
               }

                //-1
            
                updateClock();
                }     
                let idInterval = function setInterval(){
              if(+timer.hours % 24 === 0){
                console.log('Сутки!');
              
              if(clearTimeout() = true){
                clearInterval(idInterval);
              }
            }
               }
           
           
            countTimer();
            countTimer('23 dec 2019');


       //menu
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

                   closeBtn.addEventListener("click",handlerMenu); 
                   menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
                   //elem.addEvent listener('click',()=>{
                   //let menu = event.target.closest('menu');
                   //if(!menu) return;
                   //if(!event.target.contains(menu)) return;
                  // });
                   //        
                    
                          
               };//end toggleMenu                    
         
            toggleMenu();

            /popup

   /* const togglePopUp = () =>{
     const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn');
      
     
      popupBtn.forEach((elem) =>{
         elem.addEventListener('click', () =>{
          popup.style.display =  'block';

     
          });
        });
      
      popup.addEventListener('click', (event)=>{
          let target = event.target;
          if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
          } else{
            target = target.closest('.popup-content');

              if(!target){
                popup.style.display = 'none';
              }
          }
              
      });
  };//
                 
  togglePopUp();

/// табы

const tabs = () =>{
  const tabHeader = document.querySelector('.service-header'),
       tab = tabHeader.querySelectorAll('.service-header-tab'),
       tabContent = document.querySelectorAll('.service-tab');

       const toggleTabContent = (index) => {
           for(let i = 0; i < tabContent.length; i++){
              if(index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
              } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
              }
           }
       };

       tabHeader.addEventListener('click', (event) => {
        let target = event.target;
             target = target.closest('.service-header-tab')

           if(target){
             tab.forEach((item, i) =>{
                if(item === target){
                 toggleTabContent(i);
             }
               
        });
         
      }
      
      
   });
};
   tabs();

  /* //слайдер

   const slider = () =>{
      const slide = document.querySelectorAll('.portfolio-item'),
          btn = document.querySelectorAll('.portfolio-btn'),
          dot = document.querySelectorAll('.dot'),
          slider = document.querySelector('.portfolio-content');

         let currentSlide = 0,
             interval;

         const prevSlide =(elem, index, strClass) =>{
          elem[index].classList.remove(strClass);
         };
         const nextSlide = (elem, index, strClass) =>{
          elem[index].classList.add(strClass);
         };

         const autoPlaySlide = ()=>{

         prevSlide(slide,currentSlide, 'portfolio-item-active');
         prevSlide(dot, currentSlide, 'dot-active');
         //slide[currentSlide].classList.remove('portfolio-item-active');
         currentSlide++;
         if(currentSlide >= slide.length){
         currentSlide =0;
         }
         nextSlide(slide,currentSlide,'portfolio-item-active');
         nextSlide(dot, currentSlide, 'dot-active');
         };
         const startSlide = (time = 3000)=>{
         interval = setInterval(autoPlaySlide, time);
         };
         const stopSlide =()=>{
          clearInterval(interval);

         };


         slider.addEventListener('click', (event)=>{
         event.preventDefault();
         

         let target = event.target;

         if(!target.matches('.portfolio-btn, .dot')){
          return;
         }

         prevSlide(slide,currentSlide, 'portfolio-item-active');
         prevSlide(dot, currentSlide, 'dot-active'); 

         if (target.matches('#arrow-right')){
               currentSlide++;
         }else if(target.matches('#arrow-left')){
            currentSlide--;
         } else if (target.matches('.dot')){
           dot.forEach((elem, index) => {
                 if(elem === target){
                  currentSlide = index;
                 }
           });
         }
         if (currentSlide>= slide.length){
             currentSlide = 0;
         }
         if(currentSlide = 0){
          currentSlide = slide.length - 1; 
         }
         nextSlide(slide,currentSlide,'portfolio-item-active');
         nextSlide(dot, currentSlide, 'dot-active');
      });

         slider.addEventListener('mouseover',(event) =>{
          if(event.target.matches('.portfolio-btn')||
            event.target.matches('.dot')){
                stopSlide();
          }
         });

          slider.addEventListener('mouseout',(event) =>{
          if(event.target.matches('.portfolio-btn')||
            event.target.matches('.dot')){
                startSlide();
          }
         });


         startSlide(10000);
   };

   slider();

       });//end*/

    

