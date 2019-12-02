const output = document.getElementById('output');

const getData = (url, outputData) => {

  return  new Promise((resolve, reject) => {
	const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('readystatechange', () =>{
    	if(request.readyState !== 4){
    		return;
    	}
    	if(request.status === 200) {
    	  const response = JSON.parse(request.responseText);
    	  resolve(response);
    	}else{
    		reject(request.statusText);
    	}
    });
    request.send(); 
    });

   };
const outputPhotos = (data) => {
	//const random = Math.floor(Math.random() * data.lenth);
	//const obj = data[random];
	output.insertAdjacentHTML('beforbegin',
	    `<h4>${obj.title}</h4>
	    <img src="${obj.thumbnailUrl}" alt="${obj.title}">`);
};

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
      twoImg = getData('https://jsonplaceholder.typicode.com/photos/2'),
      threeImg = getData('https://jsonplaceholder.typicode.com/photos/2');
 //07:39
   Promise.all([threeImg, twoImg, oneImg])
   .then(outputPhotos)
   .catch(error => console.log('error'));
