let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    bntIncAdd = document.getElementsByTagName('button')[0],
    btnExpAdd = document.getElementsByTagName('button')[1],
    targetAmount = document.querySelector('.target-amount'),
    periodAmount = document.querySelector('.period-amount'),
    additionalExpItem = document.querySelector('.additional_expenses-items'),
    addIncomeItem = document.querySelectorAll('.additional_income_item'),
    depositCheck = document.querySelector("#deposit-check"),
    budgetDayValue = document.querySelector(".result-budget_day"),
    budgetMonthValue = document.querySelector(".result-budget_month"),
    expensesMonthValue = document.querySelector(".result-expenses_month"),
    addIncomeValue = document.querySelector(".result-additional_income"),
    addExpValue = document.querySelector(".result-additional_expenses"),
    incPeriodValue = document.querySelector(".result-income_period"),
    targetMonthValue = document.getElementsByClassName(".result-target_month" ),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    addExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'), 
    expensesItem = document.querySelectorAll('.expenses-items'),
    incomeItem = document.querySelectorAll('.income-items'),
    depositBanck = document.querySelector('.deposit-banck'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');
 

Class Budget

  const AppData = function() {

      this.budget= 0;
      this.budgetDay= 0;
      this.budgetMonth= 0;
      this.income= {};
      this.addIncome= [];
      this.incomeMonth= 0;
      this.expenses= {};
      this.expensesMonth= 0;
      this.deposit= false;
      this.percentDeposit= 0;
      this.moneyDeposit= 0;
      this.addExpenses= [];
};

  AppData.prototype.check = function() {
   if (salaryAmount.value !=='') {
          start.removeAttribute('disabled');
        }
};
AppData.prototype.start = function() {
        
       if(salaryAmount.value ==='') {
        start.setAttribute('disabled', 'true');
        return;
       } 
       const allInput = document.querySelectorAll('.data input[type = text]');
             allInput.forEach(function(trim) {
             item.setAttribute('disabled', 'true');
       });

       btnExpAdd.setAttribute('disabled','true');
       bntIncAdd.setAttribute('disabled','true');
       start.style.display = 'none';
       cancel.style.display = 'block';           

                   
       this.budget = +salaryAmount.value;
      
              
                     
        this.getExpInc();
        this.getAddExpInc();
        this.getExpensesMonth();
        this.getInfoDeposit();
        this.getBudget();
        this.getInfoDeposit();
        this.getStatusIncome()
        this.showResult();

       };


AppData.prototype.showResult = function(){
      const_this = this;
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = Math.floor(this.budgetDay);
      expensesMonthValue.value = this.expensesMonth;
      addExpValue.value = this.addExpenses.join(', ');
      addIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incPeriodValue.value = _this.calcPeriod();
      
         };

    
        

     AppData.prototype.addExpensesBlock = function(){

      const cloneExpensesItems = expensesItems[0].cloneNode(true); 
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems, bntExpAdd);
      expensesItems = document.querySelectorAll('.expenses-items'); 
       if(expensesItems.legnth === 3){
        bntExpAdd.style.display = 'none';
        }
      };
      AppData.prototype.addIncomeBlock = function() {

      const cloneIncomeItems = incomeItems[0].cloneNode(true); 
      incomeItems[0].parentNode.insertBefore(cloneIncomeItems, bntIncAdd);
      incomeItems = document.querySelectorAll('.income-items');
       if(incomeItems.legnth === 3){
        bntIncAdd.style.display = 'none';
        }
      };
      AppData.prototype.addExpIncBlock = function(){
      const mutStr= str.className.split('.')[0];
      const mutSrtItems = document.querySelector(`.${Str}-items`).value;
      const cloneMutStrItem = mutStrItem.cloneNode(true);
      mutSrtItems[0].parentNode.insertBefore(cloneMutStrItem, bntExpIncAdd); 
      if(mutStrItems.legnth === 3){
      bntmutStrAdd.style.display = 'none';
      
      
          
      }

      

      AppData.prototype.getExpenses = function(){
        const _this = this
        expensesItems.forEach(function(item){
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !=='' && cashExpenses !==''){ 
           _this.expenses[itemExpenses] = cashExpenses; 
         }
        });
      };
       AppData.prototype.getIncome =  function(){
          const_this = this;
        incomeItems.forEach(function(item){
          let itemIncome = item.querySelector('.income-title').value;

          let cashIncome = item.querySelector('.income-amount').value;
          if(itemIncome !==''&& cashIncome !=''){
            this.income[itemIncome] = cashIncome;
          }
         });
          for(let key in this.income){
          this.incomeMonth += +this.income[key];
        }
                        
      };
      
      AppData.prototype.getExpInc = function(){

        const count = item =>{
          const startStr=item.className.split('.')[0];
          const itemTitle = item.querySelector(`.${startStr}-title`).value;
          const itemAmount = item.querySelector(`.${startStr}-amout`).value;
          if(itemTitle !=='' &&itemAmount !=='') {
            this[startStr][itemTitle] = itemAmount;
          }
        }
        incomeItems.forEach(count);
        expensesItems.forEach(count);

        for (const key in this.income) {
             this.incomeMonth += +this.income[key];
        }
      };


       

      AppData.prototype.getAddExpenses = function(){
        const addExpenses = addExpItem.value.split(',');
        const_this = this
        addExpensesItem.forEach(function(item){
          item = item.trim();
          if (item !==''){
            this.addExpenses.push(item);
          }
        });

      };
      AppData.prototype.getAddIncome = function(){
      const addExpenses = addExpItem.value.split(',');
      const_this = this;
      addIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
              _this.addIncome.push(itemValue);
            }
      });
    };
     AppData.prototype.getAddExpInc = function() {
       const count = item =>{
          const addStr=item.className.split('.')[0];
          const itemTitle = item.querySelector(`.${addStr}-title`).value;
          const itemAmount = item.querySelector(`.${addStr}-amout`).value;
          addIncomeItem.forEach(function(item){
          let itemValue = item.value.trim();
           if(itemValue !== ''){
              _this.addStr.push(itemValue);
            }
        }
        getAddIncomeItems.forEach(count);
        getAddExpensesItems.forEach(count);

        for (const key in this.income) {
             this.incomeMonth += +this.income[key];
        }
     };
                                                        
AppData.prototype.getExpensesMonth = function () {

            for (let key in this.addExpenses) {
              this.expensesMonth += +this.expenses[key];
            }
          };
     

  AppData.prototype.getBudget = function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth +
        +(this.moneyDeposit+this.percentDeposit)/12;
        
        this.budgetDay = Math.floor(this.budgetMonth / 30);
      };

AppData.prototype.getTargetMonth = ()=> {
    return targetAmount.value / this.budgetMonth;
    };

AppData.prototype.getStatusIncome = ()=>{
      if (this.budgetDay > 800) {
          return ('Высокий уровень дохода');
     }else if(this.budgetDay >= 300 && this.budgetDay <=800){
      return('Средний уровень дохода');
     }else if ((this.budgetDay > 0) && (this.budgetDay < 300)){
        return('Низкий уровень дохода');
     }else if (this.budgetDay < 0 ){
         return('Что-то пошло не так');
     }else if (this.budgetDay = 0 ){
       return('На что вы живёте?');
     }
      
    };
AppData.prototype.getInfoDeposit = function() {
      if (this.deposit){
        do {
          this.percentDeposit = prompt('Какой годовой процент?','  ');
        }while(isNaN(this.moneyDeposit) || this.moneyDeposit==='' ||
          this.moneyDeposit ===' '||this.moneyDeposit ===null);
        }
      };
    

       /*change: function(){
       incPeriodValue.value = appData.calcPeriod();
       periodAmount.innerHTML =  periodSelect.value;
    
         },*/

     AppData.prototype.calcPeriod = ()=>{
        return this.budgetMonth*periodSelect.value;
     };
     AppData.prototype.reset = () => {
      let inputTextData = document.querySelectorAll('.data.input[type =text]'),
      resultInputAll = document.querySelectorAll('.result input[type = text]');

    inputTextData.forEach(function(elem) {
      elem.value='';
      elem.removeAttribute('disabled');
      periodSelect.value = '0';
      periodAmount.innerHTML = periodSelect.value;
    });
    resultInputAll.forEach(function(elem){
      elem.value = '';
    });
    for (let i = 1; i < incomeItems.legnth; i++) {
         incomeItems[i].parentNode.removeChild(incomeItems[i]);
         bntIncAdd.style.display = 'block';
     } 
     for ( i =1; i < expensesItems.lenth; i++) {
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
    };

AppData.prototype.events = function() {
start.addEventListener('klick', this.start.bind(appData)); 
btnExpAdd.addEventListener('click', this.addExpensesBlock);
bntIncAdd.addEventListener('click', this.addIncomeBlock);
salaryAmount.addEventListener('keyup',appData.check);
cancel.addEventListener('click', this.reset.bind(appData));

periodSelect.addEventListener('change', function() {
  periodAmount.innerHTML = periodSelect.value;
};
depositCheck.addEventListener('change', function(){
	if(depositCheck.checked){
		depositBanck.style.display = 'inline-block';
		depositAmount.style.display = 'inline-block';
		appData.deposit = 'true';
		depositBanck.addEventListener('change',function(){
			let selectIndex = this.options[this.selectedIndex].value;
		    if (selection = 'other'){
		    	depositPercent.style.display = 'inline-block';
		    	depositPercent.value = '';
		    }else{
		    	depositPercent.style.display = 'none';
		    	depositPercent.value = selectedIndex;
		    }

		});
		    
	}else{     
	     depositBanck.style.display = 'none';
	     depositAmount.style.display = 'none';
	     depositAmount.value = '';
         appData.deposit = 'false';

	}


});
 
start.addEventListener('click',startApp); 








