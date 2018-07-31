
let operators = ['+', '-', '/', '*'];
function invokeCommand(command) {
    let display = document.getElementById('display');
    if (command === '=') {
        let result = calculate(display.value);
        display.value = result ;

    } else {
        displayValue(command, display);
    }

}


function displayValue(value, display) {
    let lastCurrentChart = display.value[display.value.length -1];
    if (operators.includes(value) && operators.includes(lastCurrentChart)) {
        if (value !== lastCurrentChart) {
           display.value =  display.value.slice(0, -1) + value;
        }
        return;
    }
    display.value += value;


}

function calculate(expretion) {
    return new Function('return ' + expretion + ';')();
}
