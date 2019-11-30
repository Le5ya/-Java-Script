window.addEventListener('DOMContentLoaded', function() {
        'use strict';
           
        const  div = document.querySelectorAll('.col-md-4 col-sm-6 col-12'),
               imgs = document.querySelectorAll('.command__photo'),
               src ='images/command/command-';
       imgs.forEach((img, idx) => {
          img.addEventListener('mouseenter', (e) =>{
           event.target.src = event.target.dataset.img;
         });
          img.addEventListener('mouseleave', (e) =>{
           event.target.src = src + (idx+1) + '.jpg';                   /*"images/command/command-1.jpg"*/
          });
        });
           
         const clcTotal = document.querySelector(".calc-total");
         clcTotal.addEventListener('input', () => {
          input.textContent = text.replace(/\D/g, '');
         })

});