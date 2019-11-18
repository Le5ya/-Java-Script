 /* 
           let logStr = "";
           let sep = ", ";
           //console.log(addExpenses)
           // addExpenses и appData.addExpenses - это две разные вещи
           for (let i = appData.addExpenses){
              // trim() удаляет пробелы слева и справа
              let CurrentExpense = appData.addExpenses[i].trim();
              if (CurrentExpense != ""){
                  //console.log(CurrentExpense[0].toUpperCase())
                  //CurrentExpense[0] = CurrentExpense[0].toUpperCase();
                  // JS не позволяет заменить элемент строки =(

                  // A.slice(k, m) - возвращает массив, состоящий из элементов A с k-го по m-ый
                  CurrentExpense = CurrentExpense[0].toUpperCase() + 
                                    CurrentExpense.slice(1,CurrentExpense.length);
              }
              logStr += CurrentExpense;
              if (i != appData.addExpenses.length - 1){
                // Не добавляем разделитель к последнему элеементу
                logStr += sep;
              }
                 console.log('Расходы:'+logStr);*/    let money 
        
       
     start = function() {
        
       do{
        money = prompt('Ваш месячный доход?','  ')-0;
        console.log('money:', money);
      }
       while(isNaN(money) || money === ''|| money === null);
    };
    start();

      appData = {
      income: {},
      addincome: [],
      expenses: {
        expenses1: 0,
        expenses2: 0,
      },
      addExpences: [],
      deposit: false,
      mission: 50000,
      period: 10,
      budget: money,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      asking: function(){
    let addExpenses = prompt("Перечислите возможные расходы за считываемый период через запятую", " , " );
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
       for (let i = 0; i<2; i++){
            let itemExpenses = prompt('Введите обязательную статью расходов.','Cадик');
            let cashExpenses;
            do {
              cashExpenses = prompt('Во сколько это обойдётся?', 2500);
            }
            while (isNaN(cashExpenses) || cashExpenses===''|| cashExpenses===nul);
            add.expences[itemExpenses] = cashExpenses;
            }  
      },
          getExpensesMonth: function (){
            for (let key in appData.addExpenses) {
              appData.expensesMonth +=appData.expences[key];
            }
          },
     

      getBudget: function(){

      },

      getTargetMonth: function(){

      },
      getStatusIncome: function(){

      },

      
       }; 

        function asking() {
        let addExpenses = prompt("Перечислите возможные расходы за считываемый период через запятую", " , " );
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
            for (let i = 0; i<2; i++){
            let itemExpenses = prompt('Введите обязательную статью расходов.','Cадик');
            let cashExpenses;
            do {
              cashExpenses = prompt('Во сколько это обойдётся?', 2500);
            }
            while (isNaN(cashExpenses) || cashExpenses===''|| cashExpenses===nul);
            add.expences[itemExpenses] = cashExpenses;
            }  
      }
       // asking();



    

   



 
    
    

let expenses1,
    expenses2;

  getExpensesMonth = function(){
  let sum = 0;
  for (let i = 0; i < 2; i++){
    if(i===0){
      expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?','Квартплата   ');
    }
    if (i===1){
    expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?','Corbina   ');
    }

    sum += +prompt ('Во сколько это обойдётся?', 100);
  }
    return sum;
};
   let expensesAmount = getExpensesMonth();

    console.log('Расходы за месяц:' + expensesAmount) ;

  
let budgetMonth = (money - expensesAmount);
console.log(budgetMonth);
let mission = prompt('Сколько вам нужно для счастья?', 50000);
let period = Math.ceil(mission / budgetMonth);
console.log(period + ' Month');

let budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);


    appData.income = function(){
    //alert(budgetDay)
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
                          
 console.log(appData.income());


//  money = 2000;
//  alert('money : ' + money);
//  let incom;
//  incom = 'taxi';
//  alert ('incom: ' +incom);
//  let addExpences;
//  addExpences = 'entertainment, traval, shopping' + ' ';
//  alert('addExpences: ' + addExpences);
//  let appData.deposit;
//  appData.deposit = true;
//  alert('appData.deposit:  '+ appData.deposit);
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
// let appData.income;
// appData.income = 'taxi';
// console.log(typeof appData.income);
// let appData.deposit;
// appData.deposit = true;
// console.log(typeof depoits);    

// let string = 'appData.income';
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


console.log(expensesAmount);


let moneyC = prompt('Сколько составляют случайные расходы?','  ')-0;
console.log(moneyC);


 getExpensesMonth1 = function(expensesAmount, moneyC){
  return (expensesAmount + moneyC)
   
 };
 let result = getExpensesMonth1(expensesAmount, moneyC);
   while(isNaN(result)){
      console.log("Результат getExpensesMonth1 не число. Повторите ввод.")
      expenses1 =prompt("Во сколько обойдутся первые обязательные расходы?",expenses1)-0;
      expenses2 =prompt("Во сколько обойдутся вторые обязательные расходы?",expenses2)-0;
      moneyC = prompt('Сколько составляют случайные расходы?',moneyC)-0;
      result = getExpensesMonth1(expenses1, moneyC);
      //alert(result)
      //result = 0
   }
   console.log('result:', result);
 

 getBudget = function(){
     return (money - result);
 }
 let accumulatedMonth = getBudget(money, result);
 console.log("accumulatedMonth:" ,  accumulatedMonth);
//let budgetMonth = (money - expensesAmount);
//console.log(budgetMonth);
//let budgetDay = Math.floor(budgetMonth / 30);
//console.log(budgetDay);
 

 getTargetMonth = function(){
    return (mission / accumulatedMonth);
};
const targetMonth = getTargetMonth(mission, accumulatedMonth);

 console.log("targetMonth: ",targetMonth);
 
 
 if (targetMonth < 0){
   alert("Достижение цели? Не в этой жизни.((");
 }else{
 alert('Всё получится через '+ period +' месяцев.');
 }




 /* 
           let logStr = "";
           let sep = ", ";
           //console.log(addExpenses)
           // addExpenses и appData.addExpenses - это две разные вещи
           for (let i = appData.addExpenses){
              // trim() удаляет пробелы слева и справа
              let CurrentExpense = appData.addExpenses[i].trim();
              if (CurrentExpense != ""){
                  //console.log(CurrentExpense[0].toUpperCase())
                  //CurrentExpense[0] = CurrentExpense[0].toUpperCase();
                  // JS не позволяет заменить элемент строки =(

                  // A.slice(k, m) - возвращает массив, состоящий из элементов A с k-го по m-ый
                  CurrentExpense = CurrentExpense[0].toUpperCase() + 
                                    CurrentExpense.slice(1,CurrentExpense.length);
              }
              logStr += CurrentExpense;
              if (i != appData.addExpenses.length - 1){
                // Не добавляем разделитель к последнему элеементу
                logStr += sep;
              }
                 console.log('Расходы:'+logStr);*/










