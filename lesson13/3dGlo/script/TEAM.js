window.addEventListener('DOMContentLoaded', function() {
'use strict';
  const div = document.querySelectorAll('.col-md-4 col-sm-6 col-12'),
          img = document.querySelector('.command__photo'),
           src = "images/command/command-1.jpg";
            
        

        img.addEventListener('mouseenter', (e) =>{
       	 event.target.src = event.target.dataset.img;
       });
        img.addEventListener('mouseleave', (e) =>{
       	 event.target.src = src;                   /*"images/command/command-1.jpg"*/
        });
           
         const clcTotal = getElementById("#total");
         clcTotal.addEventListener('input', () => {
         	input.textContent = text.replace(/\D/g, '');
         })




});