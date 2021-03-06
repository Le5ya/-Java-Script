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

                   //closeBtn.addEventListener("click",handlerMenu); 
                   //menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
                   
                   menu.addEventListener("click", ()=>{
                    if (!(menu === event.target)){
                      handlerMenu() 
                    }                                       
                   }); 
                                
                  } ; //end toggleMenu 
         
            toggleMenu();

            //popup

     const togglePopUp = () =>{
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

   //слайдер

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



 //калькулятор

   const calc = (price = 100) => {
  
  const calcBlock = document.querySelector('.calc-block'),
         calcType = document.querySelector('.calc-type'),
         calcSquare = document.querySelector('.calc-square'),
         calcDay =  document.querySelector('.calc-day'),
         calcCount = document.querySelector('.calc-count'),
         totalValue = document.getElementById('total');

 const countSum = () => {
  let total = 0,
  countValue = 1,
  dayValue = 1;
  const typeValue = calcType.options[calcType.selectedIndex].value,
         squareValue = +calcSquare.value;

          if (calcCount.value > 1){
              countValue += (calcCount.value -1) / 10;
              
          }

           if (calcDay.value && calcDay.value < 5){
              dayValue *= 2;
            }else if (calcDay.value && calcDay.value < 10){
              dayValue *= 1.5;
            }

          if(typeValue && squareValue){
            total = price*typeValue*squareValue*countValue*dayValue;
           
          
          }
            totalValue.textContent = total;
      };

     calcBlock.addEventListener('change', (event) => {  
      const target = event.target;
      
      if (target.matches('.calc-type') || target.matches('.calc-square') ||
          target.matches('.calc-day') || target.matches('.calc-count')){
              countSum();
          }
    });


   };
      calc(100);

       //send form

       const sendForm = () => {
             const errorMessage = 'Что-то пошло не так',
                   loadMessage = 'Загрузка',
                   successMessage = 'Спасибо! Мы с вами свяжемся';

                   const form = document.getElementById('form1');

                   const statusMessage = document.createElement('div');
                   statusMessage.textContent = 'Тут будет сообщение!';

                   form.addEventListener('submit', (event) => {
                        event.preventDefault();
                        form.appendChild(statusMessage);

                        

                        const request = new XMLHttpRequest();
                        request.addEventListener('readystatechange', ()=>{
                            statusMessage.textContent = loadMessage;
                            if(request.readyState !== 4) {
                              return;
                            }

                            if(request.status === 200) {
                              statusMessage.textContent = successMessage;
                            } else {
                              statusMessage.textContent = errorMessage;
                            }    // на сервере: sleep 5s
                        });

                        request.open('POST','./server.php')
                        request.setRequestHeader('Content-Type', 'application/json');//или 'multipart/form-data'
                        const formData = new FormData(form);
                        let body = {};

                        // for (let val of formData.entries()){
                        //     body[val[0]] = val[1]
                        // }


                        formData.forEach((val, key) =>{
                             body[key] = val;

                        });

                        request.send(JSON.stringify(body));
                   });
            
       };

       sendForm();
    
           //fetch   

 postData(body)
  .then((response) => {
    if(response.status !== 200){
      throw new Error('status network not 200');
    } 

      statusMessage.textContent = successMessage;
    
    })
    .catch((error) => {
    statusMessage.textContent = errorMessage;
  console.error(error); 
    });
  const postData = (body) => {
    return fetch('./server.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:formData,
      credentials: 'include'                             //JSON:stringify(body)
  
      });

  return new Promis((resolve, request) =>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if(request.readyState !=== 4 ) {
        return;
      }
      if (request.status === 200) {
        resolve();
      } else {
        reject(request.statusText);
      }
      
  });

  request.open('POST', '.server.php') 
  
  
    });//end