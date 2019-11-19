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
       let allInput = document.querySelectorAll('.data input[type = text]');
           allInput.forEach(function(itrm) {
           item.setAttribute('disabled', 'true');
       });

       btnExpAdd.setAttribute('disabled','true');
       bntIncAdd.setAttribute('disabled','true');
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

      let cloneExpensesItem = expensesItems[0].cloneNode(true); 
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, bntExpAdd);
      expensesItems = document.querySelectorAll('.expenses-items'); 
       if(expensesItems.legnth === 3){
        bntExpAdd.style.display = 'none';
        }
      };

      

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

       addIncomeBlock = function() {

      let cloneIncomeItem = incomeItem[0].cloneNode(true); 
      incomeItem[0].parentNode.insertBefore(cloneIncomeItem, bntIncAdd);
      incomeItem = document.querySelectorAll('.income-items');
       if(incomeItems.legnth === 3){
        bntIncAdd.style.display = 'none';
        }
      };

        getIncome =  function(){
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
      getAddExpenses = function(){
        let addExpenses = addExpItem.value.split(',');
        const_this = this
        addExpenses.forEach(function(item){
          item = item.trim();
          if (item !==''){
            this.addExpenses.push(item);
          }
        });

      };
      AppData.prototype.getAddIncome = function(){
        const_this = this;
      addIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
              _this.addIncome.push(itemValue);
            }
      });
    };
                                                        
AppData.prototype.getExpensesMonth = function () {

            for (let key in this.addExpenses) {
              this.expensesMonth += +this.expenses[key];
            }
          };
     

  AppData.prototype.getBudget = function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
      };

AppData.prototype.getTargetMonth = function(){
    return targetAmount.value / this.budgetMonth;
    };

AppData.prototype.getStatusIncome = function(){
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

     calcPeriod = function(){
        return this.budgetMonth*periodSelect.value;
     };
     reset = function() {
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
 AppData.prototype.addEventListener = function() {

start.addEventListener('klick', this.start.bind(appData)); 
btnExpAdd.addEventListener('click', this.addExpensesBlock);
bntIncAdd.addEventListener('click', this.addIncomeBlock);
salaryAmount.addEventListener('keyup',appData.check);
cancel.addEventListener('click', this.reset.bind(appData));

periodSelect.addEventListener('change', function() {
  periodAmount.innerHTML = periodSelect.value;

let addExp = [];
for (let i = 0; i < this.addExpenses.legnth; i++){
  let element = this.addExpenses[i].trim();
  element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
  addExp.push(element);
}

}); 
 }   

const appData = new AppData();

console.log(appData);




let addExp = [];
for (let i = 0; i < appData.addExpenses.legnth; i++){
  let element = appData.addExpenses[i].trim();
  element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
  addExp.push(element);
}



