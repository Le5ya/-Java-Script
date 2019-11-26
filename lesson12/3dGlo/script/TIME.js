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
       

});//end
    

