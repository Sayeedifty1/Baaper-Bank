// step 1
document.getElementById('btn-deposit').addEventListener('click',function(){
//  get deposit amount
    const depositField= document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step3 get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString= depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4  add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal+ newDepositAmount;
    // set the deposit total 
    depositTotalElement.innerText= currentDepositTotal;
    // step 5 get balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 6 calculate current total balance
    const currentBalanceTotal= previousBalanceTotal + newDepositAmount;
    // set the bal total
    balanceTotalElement.innerText = currentBalanceTotal;
    //step clear the deposit field
    depositField.value='';
})