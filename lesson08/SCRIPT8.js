let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    bntIncAdd = document.getElementsByTagName('button')[0],
    btnExpAdd = document.getElementsByTagName('button')[1],
    checkBox = document.querySelector("#deposit-check"),
    addIncomeItem = document.querySelectorAll('.additional_income_item'),
    budgetDayValue = document.querySelector(".result-budget_day"),
    expensesMonthValue = document.querySelector(".result-expenses_month"),
    addIncomeValue = document.querySelector(".result-additional_income"),
    addExpValue = document.querySelector(".result-additional_expenses"),
    incPeriodValue = document.querySelector(".result-income_period"),
    targetMonthValue = document.getElementsByClassName(".result-target_month" ),
    salaryAmount = document.querySelector('.salary-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    addExpItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    budgetMonthValue = document.querySelector(".result-budget_month"),
    incomeItems = document.querySelectorAll('.income-items');
       
            
  let appData = {
      budget: 0,
      budgetDay: 0,
      budgetMonth: 0,
      income: {},
      addIncome: [],
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
        start.disabled == true;
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
	    	document.querySelectorAll('.data input[type=text]').forEach(item => function(){
	    		item.disabled = true;
	    	});
	    	start.style.display = 'none';
	    	cancel.style.display = '' ;
	    	start.onclick = appData.blocked;
    },
    unblocked: function() {
    document.querySelectorAll('.data input[type=text]').forEach(item => function(){
	    		item.disabled = falsels;
});
            start.style.display = '';
	    	cancel.style.display = 'none';
	    	cancel.onclick = appData.unblocked;	
    },
    

    showResult: function(){
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = Math.floor(appData.budgetDay);
      expensesMonthValue.value = appData.expensesMonth;
      addExpValue.value = appData.addExpenses.join(', ');
      addIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incPeriodValue.value = appData.calcPeriod();
      console.log(this);
         },
     

    addExpensesBlock: function(){

      let cloneExpensesItem = expensesItems[0].cloneNode(true); 
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, bntExpAdd);
      expensesItems = document.querySelectorAll('.expenses-items'); 
       if(expensesItems.legnth === 3){
        bntExpAdd.style.display = 'none';
        }
      },

      

      getExpenses: function(){
        expensesItems.forEach(function(item){
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !=='' && cashExpenses !==''){ 
           appData.expenses[itemExpenses] = cashExpenses; 
         }
        });
      },

       addIncomeBlock: function() {

      let cloneIncomeItem = incomeItem[0].cloneNode(true); 
      incomeItem[0].parentNode.insertBefore(cloneIncomeItem, bntIncAdd);
      incomeItem = document.querySelectorAll('.income-items');
       if(incomeItems.legnth === 3){
        bntIncAdd.style.display = 'none';
        }
      },

        getIncome: function(){
        incomeItems.forEach(function(item){
          let itemIncome = item.querySelector('.income-title').value;
          let cashIncome = item.querySelector('.income-amount').value;
          if(itemIncome !==''&& cashIncome !=''){
          	appData.income[itemIncome] = cashIncome;
          }
         });
          for(let key in this.income){
        	this.incomeMonth += +this.income[key];
        }
                        
      },
      getAddExpenses: function(){
        let addExpenses = addExpItem.value.split(',');
        addExpenses.forEach(function(item){
          item = item.trim();
          if (item !==''){
            appData.addExpenses.push(item);
          }
        });

      },
      getAddIncome: function(){
      addIncomeItem.forEach(function(item){
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
            for (let key in this.addExpenses) {
              this.expensesMonth += +this.expenses[key];
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
       incPeriodValue.value = appData.calcPeriod();
       periodAmount.innerHTML =  periodSelect.value;
    
         },

     calcPeriod: function(){
        return appData.budgetMonth*periodSelect.value;
     }, 
}; 
onChange = function() {
  periodAmount.innerHTML = periodSelect.value;
}
periodSelect.addEventListener('click',  onChange);  



    
   start.addEventListener('klick', appData.start);  


