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
      deposit: false,
      percentDeposit: 0,
      moneyDeposit: 0,
      addExpenses: [],
      //periodSelect: 3,

      check: function() {
        if (salaryAmount.value !==='') {
          start.removeAttribute('disabled');
        }
      },
      start: function() {
        
       if(salaryAmount.value ==='') {
        start.setAttribute('disabled', 'true');
       	return;
       } 
       let allInput = document.querySelectorAll('.data input[type = text]');
           allInput.forEach(function(itrm) {
           item.setAttribute('disabled', 'disabled');
       });

       btnExpAdd.setAttribute('disabled','disabled');
       bntIncAdd.setAttribute('disabled','disabled');
       start.style.display = 'none';
       cancel.style.display = 'block';           

                   
       this.budget = +salaryAmount.value;
      
              
                     
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.getInfoDeposit();
        this.getStatusIncome()
        this.showResult();

       },


   /* blocked: function(){
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
    },*/
    

    showResult: function(){
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = Math.floor(this.budgetDay);
      expensesMonthValue.value = this.expensesMonth;
      addExpValue.value = this.addExpenses.join(', ');
      addIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incPeriodValue.value = this.calcPeriod();
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
    getInfoDeposit:function() {
      if (this.deposit){
        do {
          this.percentDeposit = prompt('Какой годовой процент?','  ');
        }while(isNaN(this.moneyDeposit) || this.moneyDeposit==='' ||
          this.moneyDeposit ===' '||this.moneyDeposit ===null);
        }
      },
    

       /*change: function(){
       incPeriodValue.value = appData.calcPeriod();
       periodAmount.innerHTML =  periodSelect.value;
    
         },*/

     calcPeriod: function(){
        return this.budgetMonth*periodSelect.value;
     },
     reset:function() {
      let inputTextData = document.querySelectorAll('.data.input[type =text]'),
      resultInputAll = document.querySelectorAll('.result input[type = text]');

    inputTextData.forEach(function(elem) {
      elem.value='';
      elem.removeAttribute('disabled');
      periodSelect.value = '0';
      periodAmount.innerHTML = periodSelect.value;
    });
    resultInputAll.forEach(function(elem) {
      elem.value = '';
    });
    for (let i = 1; i < incomeItems.legnth; i++) {
         incomeItems[i].parentNode.removeChild(incomeItems[i]);
         bntIncAdd.style.display = 'block';
     } 
     for ( i =1: i < expensesItems.lenth; i++) {
      expensesItems[i].parentNode.removeChild(expensesItems[1]);
      bntExpAdd.style.display = 'block';
     }
     this.budget = 0;
     this.budgetDay = 0;
     this.budgetMonth = 0;
     this.income = [];
     this.incomeMonth = 0;
     this.addIncome = [];
     this.expenses = {};
     this.expensesMonth = 0;
     this.deposit = false;
     this.percentDeposit = 0;
     this.moneyDeposit = 0;
     this.addExpenses = [];

     cancel.style.display = 'none';
     start.style.display = 'block';
     bntExpAdd.removeAttribute('disabled');
     bntIncAdd.removeAttribute('disabled');
     checkBox.checked = false;
    }
};

 /* onChange = function() {
  periodAmount.innerHTML = periodSelect.value;
}
periodSelect.addEventListener('click',  onChange); */ 



    
start.addEventListener('klick', appData.start.bind(appData)); 
btnExpAdd.addEventListener('click', appData.addExpensesBlock);
bntIncAdd.addEventListener('click', appData.addIncomeBlock);
salaryAmount.addEventListener('keyup',appData.check);
cancel.addEventListener('click', appData.reset.bind(appData));

periodSelect.addEventListener('change', function() {
  periodAmount.innerHTML = periodSelect.value;
});

let addExp = [];
for (let i = 0; i < appData.addExpenses.legnth; i++){
  let element = appData.addExpenses[i].trim();
  element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
  addExp.push(element);
} 


