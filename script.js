let inputField = document.getElementById("input");
let resultField = document.getElementById("result");

function appendNumber(number) {
    inputField.innerText += number;
}

function appendOperator(operator) {
    inputField.innerText += " " + operator + " ";
}

function clearInput() {
    inputField.innerText = "";
    resultField.innerText = "Total: 0";
}

function backspace() {
    inputField.innerText = inputField.innerText.slice(0, -1);
}

function calculate() {
    try {
        let expression = inputField.innerText.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        resultField.innerText = "Total: " + result;
    } catch (e) {
        resultField.innerText = "Error!";
    }
}
