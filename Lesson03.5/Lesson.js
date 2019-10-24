let A = ['понедельник', 'вторник','среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let B =['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let lang;
 lang = prompt('Выберите язык', lang);
// if (lang = "ru") {
//     alert(A);
// }else
// if (lang = "en") {
//     alert (B)
// }else{
//     alert('Язык не выбран')
// }
//Второй способ

 switch(lang){
  case 'ru':
      alert(A);
    break ; 
    case 'en':
      alert(B);
}
 //Третий способ
//(lang ='en') ? (alert(B)):(alert(A));





