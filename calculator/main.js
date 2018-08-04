
let operators = ['+', '-', '/', '*'];
function invokeCommand(command) {
    let display = document.getElementById('display');
    if (command === '=') {
        let result = calculate(display.textContent);
        display.textContent= result ;

    } else {
        displayValue(command, display);
    }

}


function displayValue(value, display) {
    let lastCurrentChart = display.textContent[display.textContent.length -1];
    if (operators.includes(value) && operators.includes(lastCurrentChart)) {
        if (value !== lastCurrentChart) {
           display.textContent =  display.textContent.slice(0, -1) + value;
        }
        return;
    }
    display.textContent += value;


}

function calculate(expretion) {
    return new Function('return ' + expretion + ';')();
}
