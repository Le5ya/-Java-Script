let collect = document.querySelectorAll('.books');

let book = document.querySelectorAll('.book');

console.log(collect);
console.log(book[0]);
console.log(book[1]);
collect[0].insertBefore(book[1],book[0]);

collect[0].insertBefore(book[5],book[4]);
collect[0].insertBefore(book[4],book[3]);
collect[0].appendChild(book[2]);

//console.log(book[4].innerHTML);


let a = document.getElementsByTagName('a');
console.log(a);
console.log(a[2].textContent);
a[2].textContent = 'Книга 3. this и Прототипы Объектов';
let ul = document.querySelectorAll('ul');
console.log(ul[1]);
let li = document.querySelectorAll('li');
console.log(li);
//главы по порядку
console.log(ul[1]);
ul[1].insertBefore(li[12],li[10]);
ul[1].insertBefore(ul[1].children[9],ul[1].children[5]);
console.log(ul[1].children[5]);
ul[1].insertBefore(ul[1].children[8],ul[1].children[5]);
ul[1].insertBefore(ul[1].children[5],ul[1].children[10]);
ul[1].insertBefore(ul[1].children[5],ul[1].children[10]);
ul[1].insertBefore(ul[1].children[7],ul[1].children[5]);
ul[1].insertBefore(ul[1].children[2],ul[1].children[10]);
 
console.log(ul[4]);


ul[4].insertBefore(ul[4].children[9],ul[4].children[3]);
ul[4].insertBefore(ul[4].children[2],ul[4].children[6]);
ul[4].insertBefore(ul[4].children[7],ul[4].children[6]);
ul[4].insertBefore(ul[4].children[9],ul[4].children[7]);
ul[4].insertBefore(ul[4].children[9],ul[4].children[7]);
ul[4].insertBefore(ul[4].children[9],ul[4].children[8]);

let adv = document.getElementsByClassName('adv'); 
let span = document.getElementsByTagName('span');
//adv[0].removeChild(span[0]);
adv[0].remove();

console.log(ul[5]);
let newElem = document.createElement('li');
newElem .textContent = 'Глава 8: За пределами ES6';
ul[5].appendChild(newElem);
ul[5].insertBefore(ul[5].children[10],ul[5].children[9]);