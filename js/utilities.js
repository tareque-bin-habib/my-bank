// Get the input Field
function getInput(inputField) {
    const getInputField = document.getElementById(inputField);
    const getInputFieldValueString = getInputField.value;
    const getInputFieldValue = parseFloat(getInputFieldValueString);
    getInputField.value = '';
    return getInputFieldValue;
}

// Get the Balance
function getAmount(innerValue) {
    const getTotalAmount = document.getElementById(innerValue);
    const getTotalAmountValueString = getTotalAmount.innerText;
    const getTotalAmountValue = parseFloat(getTotalAmountValueString);
    return getTotalAmountValue;
}

// set the value
function setValue(oldValue, newValue) {
    const newElement = document.getElementById(oldValue);
    newElement.innerText = newValue;
}