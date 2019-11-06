let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    bntIncome = document.getElementsByClassName('bnt-plus income_add'),
    checkBox = document.getElementById("deposit-check"),
    additionalIncomItem = document.querySelectorAll('.additional-incom_item'),
    budgetMonthValue = document.getElementsByClassName("r budget_month-value"),
    budgetDayValue = document.getElementsByClassName("r budget_day-value"),
    expensesMonthValue = document.getElementsByClassName("l expenses_month-value"),
    accumulatedMonthValue=document.getElementsByClassName('accumulated_month-value')[0],
    additionaIncomeValue = document.getElementsByClassName("result-total additional_income-value"),
    additionalExpensesValue = document.getElementsByClassName("result-total additional_expenses-va"),
    incomePeriodValue = document.getElementsByClassName("result-total income_period-value"),
    targetMonthValue = document.getElementsByClassName("result-total target_month-value" ),
    salaryAmount = document.querySelector('.salaryAmount'),
    incomeAmount = document.querySelector('.income-amount'),
    incomeTitle = document.querySelector('.income-title'),
    depositAmount = document.querySelector('.deposit_amount'),
    depPercent = document.querySelector('.deposit_percent'),
    targetAmount = document.querySelector('.target_amount'),
    additionalExpenses = document.querySelector('.additional-expenses'),
    perSelect = document.querySelector('.period_select'),
    range = document.querySelector('.range').
    expensesItems = document.querySelectorAll('.expenses=items'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    incomeItem = document.querySelectorAll('.incom-items'),
    inputText =document.querySelectorAll('type=text');
            
  let appData = {
      budget: 0,
      budgetDay: 0,
      budgetMonth: 0,
      income: {},
      incomeMonth: 0,
      addincome: [],
      expenses: {}
      expensesMonth: 0,
      addExpenses: [],
      deposit: false,
      percentDeposit: 0,
      moneyDeposit: 0,
      period: 10,
      start: function() {
        
       if(salaryAmount.value ==='') {
        start.disabled = true;
       	alert('Ошибка, поле "Месячный доход" должно быть заполнено');
       	return;
       }              

       

       if(start.onclick = true) {
        inputText.disabled = true;
        start.style.display = 'none';
        cancel.style.display = 'block'; 
        
        appData.budget = +salaryAmount.value;
       }
              
                      //appData.asking();
        appData.getExpenses();
        appData.getAddExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();

        appData.getBudget();
        appData.showResult();
    },
    showResult: function(){
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionaIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcPeriod();
      showResult.addEventListener('periodSelect.value', appData.showResult);

    },

      addExpensesBlock: function(){

      let clonExpensesItem = expensesItem[0].clonNode(true); 
      expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItem = document.querySelectorAll('.expenses-items'); 
       if(expensesItem.legnth === 3){
        expensesPlus.style.display = 'none';
        }
      },

       addIncomeBlock: function(){

      let clonIncomeItem = incomeItem[0].clonNode(true); 
      incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItem = document.querySelectorAll('.income-items');
       if(incomeItem.legnth === 3){
        incomePlus.style.display = 'none';
        }
      },

      getExpenses: function(){

        expensesItems.forEach(function(item){
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amout').value;
         if(itemExpenses !=='' && cashExpenses !==''){ 
           appData.addExpenses[itemIncome] = cashExpenses; 
         }
        });
      },

      getIncome: function(){
        incomItems.forEach(function(item){
          let itemIncomes = item.querySelector('.income-title').value;
          let cashIncomes = item.querySelector('.icome-amount').value;
          if(confirm('Есть ли у вас дополнительный источник доходов?'))
          {
            do{
           itemIncome = prompt('Какой у  вас дополнительный заработок?',' ');
          }
            while( !isNaN(itemIncome - 0));//typeof itemIncome-0 !== 'number');
          // В JS typeof NaN == "number"
           do {
           let cashIncome = prompt('Сколько зарабатываете на этом в месяц?',' ')-0;
          }    
           while(isNaN(cashIncome ));
          appData.income[itemIncome] = cashIncome;

            }
                
         
        });


             for(key in appData.income){
               appData.incomeMonth += +appData.income[key];
             }

      },
      getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
          item item.trim();
          if (item !==''){
            appData.addExpenses.push(item);
          }
        });

      },
      getAddIncome: function(){
      additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
              appData.addIncome.push(itemValue);
            }
      });
    },                                                        
          getExpensesMonth: function () {
            for (let key in appData.addExpenses) {
              appData.expensesMonth += +appData.expenses[key];
            }
          },
     

      getBudget: function(){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
       
      },
      getTargetMonth: function(){
        return targetAmount.value / appData.budgetMonth;
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
      calcPeriod: function(){
        return appData.budgetMonth*periodSelect.value;
            } 
           showResult.addEventListener('periodSelect.value', appData.showResult);
          };

         start.addEventListener('click', appData.start);

         expensesPlus.addEventListener('click',appData.addExpensesBlock);


        //if (input && input.value) {}
         //document.getElementById("MyButton").disabled = true;
          
         //var inp = document.querySelector("[type='button']");

          //inp.addEventListener('click',myFunk)


        


          /*if (appData.getTargetMonth()>0) {
          console.log('Цель будет достигнута в течение ' +Math.ceil(appData.getTargetMonth()) 
         +' месяца' );
          } else {
            console.log('Не в этой жизни');
          }*/
         

          for(let key in appData) {
            console.log('Программа содержит данные: '+ key + '_' +appData[key]);
          }
          appData.getInfoDeposit();
         // console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSaveMoney());

          /* let logStr = "";
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
           
