function getInput(inputField) {
    const getInputField = document.getElementById(inputField);
    const getInputFieldValueString = getInputField.value;
    const getInputFieldValue = parseFloat(getInputFieldValueString);
    getInputField.value = '';
    return getInputFieldValue;
}