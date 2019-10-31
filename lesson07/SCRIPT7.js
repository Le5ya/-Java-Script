    let money 
        
       
     start = function() {
        
       do{
        money = prompt('Ваш месячный доход?','  ')-0;
        console.log('money:', money);
        console.log(typeof money);
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
      addExpenses: [],
      deposit: false,
      percentDeposit: 0,
      moneyDeposit: 0,
      mission: 50000,
      period: 10,
      budget: money,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      asking: function(){

        if(confirm('Есть ли у вас дополнительный источник доходов?')){
          do{
           itemIncome = prompt('Какой у  вас дополнительный заработок?',' ');
          }while( !isNaN(itemIncome - 0));//typeof itemIncome-0 !== 'number');
          // В JS typeof NaN == "number"
          do {
           cashIncome = prompt('Сколько зарабатываете на этом в месяц?',' ')-0;
          }while(isNaN(cashIncome ));
          appData.income[itemIncome] = cashIncome;
        } 
        console.log(typeof itemIncome );
        console.log(typeof cashIncome);
      

    let addExpenses = prompt("Перечислите возможные расходы через запятую", " , " );
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
       for (let i = 0; i<2; i++){
            let itemExpenses = prompt('Введите обязательную статью расходов.','Cадик');
            let cashExpenses;
            do {
              cashExpenses = prompt('Во сколько это обойдётся?', 2500);
            }
            while (isNaN(cashExpenses) || cashExpenses===''|| cashExpenses===null);

            appData.expenses[itemExpenses] = cashExpenses;
            } 
           let logStr = "";
           let sep = ", ";
           //console.log(addExpenses)
           // addExpenses и appData.addExpenses - это две разные вещи
           for (let i in appData.addExpenses){
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
           }
           console.log("Расходы: " + logStr);
      },
          getExpensesMonth: function () {
            for (let key in appData.addExpenses) {
              appData.expensesMonth += +appData.expenses[key];
            }
          },
     

      getBudget: function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
       
      },
      getTargetMonth: function(){
        return appData.mission / appData.budgetMonth;
      },
      getStatusIncome: function(){
        if (appData.budgetDay > 800) {
          return ('Высокий уровень дохода');
     }else if(appData.budgetDay >= 300 && appData.budgetDay <=800){
      return('Средний уровень дохода');
     }else if ((appData.budgetDay > 0) && (appData.budgetDay < 300)){
        return('Низкий уровень дохода');
     }else if (appData.budgetDay < 0 ){
         return('Что-то пошло не так');
     }else if (appData.budgetDay = 0 ){
       return('На что вы живёте?');
     }
      
       },  
      getInfoDeposit: function(){
        if (appData.deposit){
          appData.percentDeposit = prompt('Какой годовой процент от депозита? ', '10');
          appData.moneyDeposit = prompt('Сумма депозита?',' 3000');
        }
      },
      calcSaveMoney: function(){
        return appData.budgetMonth*appData.period;
      }
       }; 

          appData.asking();
          appData.getExpensesMonth();
          appData.getBudget();
          
          console.log('Расходы за месяц:  '+appData.expensesMonth);

          if (appData.getTargetMonth()>0) {
          console.log('Цель будет достигнута в течение ' +Math.ceil(appData.getTargetMonth()) 
         +' месяца' );
          } else {
            console.log('Не в этой жизни');
          }
          console.log(appData.getStatusIncome());

          for(let key in appData) {
            console.log('Программа содержит данные: '+ key + '_' +appData[key]);
          }
          appData.getInfoDeposit();
         // console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSaveMoney());

   