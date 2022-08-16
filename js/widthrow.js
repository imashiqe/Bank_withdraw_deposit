/*
1. add event handler with the withdraw button
2. get the widthraw amount from the withdrw button
2.5 also make sure to convert the input a number by using parseFloat
3.Get previous withdraw total
4.5. calculate total withdraw amount
4.6. total withdraw amount
5. get  previus balance
6. calculate new balance total
6.5 set the new balance total

7. clear input field
// step 01 :

*/
document.getElementById('btn-widthrow').addEventListener('click', function(){
//step -2:
const widthrowField = document.getElementById('widthrow-field');
const newWithdrawAmountString = widthrowField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);


// if (isNan(newWithdrawAmount)) {
//     alert('Please Provide A number');
// }
// step-3
const widthrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = widthrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
console.log(previousWithdrawTotal);


// step -5
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat (previousBalanceTotalString);

if(newWithdrawAmount > previousBalanceTotal){
    alert('Amount Low Deposit Now ')
    return;
}
// step- 4
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
widthrawTotalElement.innerText = currentWithdrawTotal;
// step 6 
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;

// step 7
widthrowField.value = '';
})