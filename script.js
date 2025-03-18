function appendValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
        if (display.value === 'Infinity') 
            display.value = "Can't be divided";
    } catch {
        display.value = 'Invalid Expression';
    }
}
