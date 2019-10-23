let money = prompt("Ваш месячный доход?","   ");
let addExpenses = prompt("Перечислите возможные расходы за считываемый период через запятую", "  " );
let array = addExpenses.split(',');
console.log(array);

let deposit = confirm('Есть ли у вас депозит в банке?');
alert (deposit);


{ 
    console.log(typeof(money));
    console.log(typeof(income));
    console.log(typeof(deposit));
}
let obligExpensesA = prompt('Какие обязательные ежемесячные расходы у вас есть?','   ');
let moneyA =prompt("Во сколько обойдётся?",'  ');
let obligExpensesB = prompt('Какие обязательные ежемесячные расходы у вас есть?','   ');
let moneyB =prompt("Во сколько обойдётся?",'     ');
let budgetMonth = (money - moneyA - moneyB);
console.log(budgetMonth);
let mission = 1000000;
let budgetMonth1 = 12345
let period = Math.ceil(mission / budgetMonth1);
console.log(period + ' Month');
let budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);
switch(budgetDay){
     case budgetDay > 800 :
    console.log('Высокий уровень дохода');
    case budgetDay >= 300 && budgetDay <=800:
    console.log('Средний уровень дохода');
    case budgetDay > 0 && budgetDay < 300:
    console.log('Низкий уровень дохода');
    case budgetDay < 0 :
    console.log('Что-то пошло не так');
    case budgetDay :
    console.log('На что вы живёте?');
}
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
