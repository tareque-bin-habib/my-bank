document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = getInput('deposit-field');
    const depositTotal = getAmount('deposit-total');
    const newDepositTotal = depositField + depositTotal;
    setValue('deposit-total', newDepositTotal);
    const balanceTotal = getAmount('balance-total');
    const newBalanceTotal = balanceTotal + depositField;
    setValue('balance-total', newBalanceTotal);
})
