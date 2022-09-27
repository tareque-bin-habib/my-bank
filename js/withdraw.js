document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = getInput('withdraw-field');
    const withdrawTotal = getAmount('withdraw-total');
    const newWithdrawTotal = withdrawTotal + withdrawField;
    setValue('withdraw-total', newWithdrawTotal);
    const balanceTotal = getAmount('balance-total');
    const newBalanceTotal = balanceTotal - withdrawField;
    setValue('balance-total', newBalanceTotal);
})