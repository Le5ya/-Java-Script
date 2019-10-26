    let money 
    income = 'Фриланс';
    addExpenses = prompt("Перечислите возможные расходы за считываемый период через запятую", "  " );
    deposit = confirm('Есть ли у вас депозит в банке?');
    mission = 1000000;

    
      let start = function() {
        //money = prompt('Ваш месячный доход?', '  ');
       do{
        money = prompt('Ваш месячный доход?','  ');
        console.log('money:', money);
      }
       while(isNaN(money) || money === ''|| money === null);
    };
    start();




//let incom = prompt('Ваш дополнительный доход?',' ');

let showTypeOf = function(data){
    console.log(data, typeof(data));
};


 
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);
    

let obligExpensesA = prompt('Какие обязательные ежемесячные расходы у вас есть?','   ');
let moneyA =prompt("Во сколько обойдётся?",'  ');
let obligExpensesB = prompt('Какие обязательные ежемесячные расходы у вас есть?','   ');
let moneyB =prompt("Во сколько обойдётся?",'     ');
let budgetMonth = (money - moneyA - moneyB);
console.log(budgetMonth);

let budgetMonth1 = 12345
let period = Math.ceil(mission / budgetMonth1);
console.log(period + ' Month');
let budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);


let getStatusIncome = function(){
 
     if (budgetDay > 800) {
       return('Высокий уровень дохода'); 
     }else if(budgetDay >= 300 && budgetDay <=800){
      return('Средний уровень дохода');
     }else if ((budgetDay > 0) && (budgetDay < 300)){
        return('Низкий уровень дохода');
     }else if (budgetDay < 0 ){
         return('Что-то пошло не так');
     }else if (budgetDay = 0 ){
       return('На что вы живёте?');
     }
    };
                          
console.log(getStatusIncome());


//  money = 2000;
//  alert('money : ' + money);
//  let incom;
//  incom = 'taxi';
//  alert ('incom: ' +incom);
//  let addExpences;
//  addExpences = 'entertainment, traval, shopping' + ' ';
//  alert('addExpences: ' + addExpences);
//  let deposit;
//  deposit = true;
//  alert('deposit:  '+ deposit);
//  let mission;
//  mission = 1000000;
//  alert('mission:  '+ mission);
//  let period;
//  period = 7;
//  alert('period:  '+ period);

// // 2) Методы и свойства
// let money;
// money = 2000;
// console.log(typeof money);
// let income;
// income = 'taxi';
// console.log(typeof income);
// let deposit;
// deposit = true;
// console.log(typeof depoits);

// let string = 'income';
// console.log(string.length);
// let period;
// period = 8;
// console.log('Период '+period+ ' месяцев');
// let mission;
// mission = 1000000;
//  console.log('Цель: заработать '+mission+' долларов');
//  let str = 'addExpenses';
//  console.log(str.toLowerCase());
//  let str1 = 'a, d, d, E, x, p, e, n, s, e, s'
//  console.log(str1.split('  '));

// let budgetDay;
// budgetDay=4000;
// console.log('Доход за день:  '+budgetDay/30,'остаток: '+ budgetDay%30);

// lesson 04


console.log(moneyA);
console.log(moneyB);

let moneyC = prompt('Сколько составляют случайные расходы?','  ');
console.log(moneyC);


const getExpensesMonth = function(moneyA, moneyB, moneyC){
  return (moneyA + moneyB + moneyC)
   
 };
 let result = getExpensesMonth(+moneyA, +moneyB, +moneyC);
   while (isNaN(result)){
     console.log('ERROR');
   }
   console.log('result:', result);
 

 const getAccumulatedMouth = function(){
     return (money - result);
 };
 let accumulatedMouth = getAccumulatedMouth(money, result);
 console.log("accumulatedMouth:" ,  accumulatedMouth);

const getTargetMonth = function(){
    return (mission / accumulatedMouth);
};
let targetMonth = getTargetMonth(mission, accumulatedMouth);

 console.log("targetMonth: ",targetMonth);
 
 if (targetMonth < 0){
   alert("Достижение цели? Не в этой жизни.((");
 }else{
 alert("Цель будет достигнута через "+targetMonth+" месяцев");
 }















