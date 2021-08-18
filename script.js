
function AddDigit(num) {
    Calculator.Display.value = Calculator.Display.value + num;
}

function Clear() {
    document.Calculator.Display.value = null;
}

function Erase() {
    Calculator.Display.value = Calculator.Display.value.slice(0, Calculator.Display.value.length - 1);
}
