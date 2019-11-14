let btnStart = document.getElementById('start'),
    btnCancel = document.getElementById('cancel'),
    inputs = document.getElementsByTagName("input");
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    bntIncome = document.getElementsByClassName('bnt-plus income_add'),
    checkBox = document.getElementById("deposit-check"),
    additionalIncomItem = document.querySelectorAll('.additional-incom_item'),
    budgetMonthValue = document.getElementsByClassName("r budget_month-value"),
    budgetDayValue = document.getElementsByClassName("r budget_day-value"),
    expensesMonthValue = document.getElementsByClassName("l expenses_month-value"),
    incomeAmount = document.querySelector('.income-amount'),
    depositAmount = document.querySelector('.deposit_amount'),
    depPercent = document.querySelector('.deposit_percent'),

    accumulatedMonthValue=document.getElementsByClassName('accumulated_month-value')[0],
    additionaIncomeValue = document.getElementsByClassName("additional_income-value")[0],
    additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0],
    incomePeriodValue = document.getElementsByClassName("income_period-value")[0],
    targetMonthValue = document.getElementsByClassName("target_month-value" )[0],
    salaryAmount = document.querySelector('.salaryAmount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle =document.querySelector('.expenses-title')
    additionalExpenses = document.querySelector('.additional-expenses'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    periodSelect = document.querySelector('#period-select'),
    periodAmount = document.querySelector('#title period-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target_amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    inputText =document.querySelectorAll('type-text');
           
  let appData = {
      budget: 0,
      budgetDay: 0,
      budgetMonth: 0,
      income: {},
      addincome: [],
      incomeMonth: 0,
       expenses: {},
      expensesMonth: 0,
      addExpenses: [],
      deposit: false,
      percentDeposit: 0,
      moneyDeposit: 0,
      periodSelect: 3,
      start: function() {
        
       if(salaryAmount.value ==='') {
        bntStart.disabled = true;
       	alert('Ошибка, поле "Месячный доход" должно быть заполнено');
       	return;
       } 
       appData.budget = +salaryAmount.value;             

       console.log(this);
            
       appData.budget = +salaryAmount.value;
      
              
                     
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        
        appData.getBudget();
        appData.showResult();

        appData.blocked();
        appData.unblocked();
        
    },
    blocked: function(){
	    	document.querySelectorAll('.data input[type=text]').forEach(function(){
	    		item.disabled = true;
	    	});
	    	bntStart.style.display = 'none';
	    	bntCancel.style.display = '' ;
	    	bntStart.onclick = appData.blocked;
    },
    unblocked: function() {
    document.querySelectorAll('.data input[type=text]').forEach(function(){
	    		item.disabled = falsels;
});
            bntStart.style.display = '';
	    	bntCancel.style.display = 'none';
	    	bntCancel.onclick = appData.unblocked;	
    },
    

    showResult: function(){
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = Math.floor(appData.budgetDay);
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionaIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcPeriod();
      console.log(this);
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
           appData.expenses[itemExpenses] = cashExpenses; 
         }
        });
      },

        getIncome: function(){
        incomeItems.forEach(function(item){
          let itemIncome = item.querySelector('.income-title').value;
          let cashIncome = item.querySelector('.income-amount').value;
          if(itemIncome !==''&& cashIncome !=''){
          	appData.income[itemIncome] = cashIncome;
          }
         });
          for(let key in appData.income){
        	appData.incomeMonth += +appData.income[key];
        }
                        
      },
      getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
          item = item.trim();
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
     getInfoDeposit: function(){
        if (appData.deposit() = true){
          appData.percentDeposit = prompt('Какой годовой процент от депозита? ', '10');
          appData.moneyDeposit = prompt('Сумма депозита?',' 3000');
        }
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

       change: function(){
       incomePeriodValue.value = appData.calcPeriod();
       periodAmount.innerHTML =  periodSelect.value;
    
         },

     calcPeriod: function(){
        return appData.budgetMonth*periodSelect.value;
     }, 
     }; 
     onChange = function() {
	let periodSelect=document.getElementById("period-select");
	document.getElementById("title period-amount").innerHTML = periodSelect.value; 

}
document.getElementById("period-select").addEventListener('click', function() {
	onChange();
});
onChange;

    
     


