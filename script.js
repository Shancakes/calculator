let display = document.getElementById('display');
let currentValue = '';

//Adds the value to the display
function addValue(value) {
    currentValue += value;
    display.value = currentValue;
}

//Clears the display
function clearDisplay() {
    currentValue = '';
    display.value = '';
}

//Calculate the result
function calculate() {
    try {
        const result = eval(currentValue);
        display.value = result;
        currentValue = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}
