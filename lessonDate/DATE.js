let date = new Date();

let hi  =document.querySelector('#hi'),     
     today =document.querySelector('#today'),
     time =document.querySelector('#time'),
    
      X=['утро','день','вечер','ночь'];

function Hi() {
 
 let n = 0; n<4; n++;
   if (date.getHours() < 12){ n = 0};
   if ((date.getHours() > 11)&&(date.getHours() < 17)){ n = 1};     
   if ((date.getHours() > 17)&&(date.getHours() < 24)){ n = 2};
   if ((date.getHours() > 0)&&(date.getHours() < 5)){ n = 0};
   let hiStr =`Добрый ${X[n]}`;

 hi.textContent = hiStr;

}

Hi();

function Today() {
let todayStr = `Сегодня ${date.toLocaleDateString( 'ru-Ru',{weekday: 'long'})}`;
today.textContent = todayStr;
}
Today();

function Time(){
	let timeString = `Текущее время ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	time.textContent = timeString;

}
Time();

function Reminder() {
	let 
	    dateStop = new Date('31 dec 2019').getTime(),
	    dateNow = new Date().getTime(),
	    timeRemaining = (dateStop - dateNow) / 1000 / 60 / 60 / 24;
        rem = Math.floor(timeRemaining);
        remString = `До Нового года осталось ${rem} дней`;
        reminder.textContent = remString;

console.log(rem);
}


Reminder();
//let Week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//console.log(Week); 
 //a = date.toLocaleDateString('ru-Ru',{weekday: 'long'});
// b = date.toLocaleDateString('ru-Ru',{month: 'long'});
//alert(date);
/*console.log(' год' + date.getFullYear());
console.log('месяц' + (date.getMonth() + 1))
console.log('День месяца' + date.getDate());
console.log('День недели' + date.getDay());
console.log('час ' + date.getHours());
console.log('минуты  ' + date.getMinutes());
console.log('секунды  ' + date.getSeconds());
console.log('миллисекунды ' + date.getMilliseconds());*/


/*date.setDate(date.getDate() - 100);
console.log(date);

console.log(date.toTimeString());
console.log(date.toDateString('ru'));

console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

console.log(date.toISOString().substr(0, 10));
console.log(Date.parse('10.03.1978'));*/