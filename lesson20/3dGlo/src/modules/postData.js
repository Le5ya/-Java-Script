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

  //request.open('POST', '.server.php') 
  
  
    });//end
   export default postData.js