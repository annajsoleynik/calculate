
let operators = ['+', '-', '/', '*'];
let display = document.getElementById('display');
setValue('0');

function addNumber(num) {
    let displayText = getDisplayText();
    let firstChar = displayText[0];
    if (firstChar === '0' && displayText.length === 1) {
        setValue(num);
        return;
    }
    addValue(num);
}

function addOperation(operator) {
    let displayText = getDisplayText();
    let lastCurrentChart = displayText[displayText.length -1];
    if (operators.includes(operator) && operators.includes(lastCurrentChart)) {
        if (operator !== lastCurrentChart) {
            setValue(displayText.slice(0, -1) + operator);
        }
        return;
    }
    addValue(operator);
}

function clearDisplay() {
    setValue('0');
}

function calculate() {
    let expretion = getDisplayText();
    let result = new Function('return ' + expretion + ';')();
    setValue(result);
}

function addValue(value) {
    display.textContent += value;
}

function setValue(value) {
    display.textContent = value;
}

function getDisplayText() {
    return display.textContent;
}







