
       const sendForm = () => {
             const errorMessage = 'Что-то пошло не так',
                   loadMessage = 'Загрузка',
                   successMessage = 'Спасибо! Мы с вами свяжемся';

                   const form = document.getElementById('form1');

                   const statusMessage = document.createElement('div');
                   statusMessage.style.cssText = 'font-size: 2rem;';

                   form.addEventListener('submit', (event) => {

                        event.preventDefault();
                        form.appendChild(statusMessage);
                        statusMessage.textContent = loadMessage;
                        const formData = new FormData(form);
                        let body = {};
                        formData.forEach((val, key) =>{
                          body[key] = val;
                        });
                        postData(body,
                          () => {
                            statusMessage.textContent = successMessage;
                            form.querySelectorAll('input').forEach(item=> item.value = '');
                          },
                          (error) => {
                            statusMessage.textContent = errorMessage;
                            console.error(error);
                          }
                        );
                      });

                        const postData = (body, outputData, errorData) => {
                        const request = new XMLHttpRequest();
                        request.addEventListener('readystatechange', ()=>{
                            if(request.readyState !== 4) {
                              return;
                            }
                            if(request.status === 200) {
                              outputData();
                            } else {
                              errorData(request.status);
                            }    
                        });

                        request.open('POST','./server.php')
                        request.setRequestHeader('Content-Type', 'application/json');
                        request.send(JSON.stringify(body));
                        };
                      };
                      
                      export default postData;
                   