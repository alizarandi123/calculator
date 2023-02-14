//Github.com/alizarandi123/CalculatorProject/


const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
const clearButton = document.getElementById('clear');
const backButton = document.getElementById('backspace');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const equalButton = document.getElementById('equal');
const squareXtoYButton = document.getElementById('square');
const xx2Button = document.getElementById('x2');
const rootButton = document.getElementById('root');
const clearDisplay = document.getElementById('clear-display');
const toggle = document.getElementById("toggle");
const Percent = document.getElementById("Percent");
let beforeNumber = document.getElementById("before-number");
let beforeOperator = document.getElementById("before-operation");
let lastOperation = '';
let memory = 0;
let clickCounter = 0;
let base = 0;
let exponent = 0;
let firstRun = true;
///////////////////////////////////////////////
buttons.addEventListener('click', inputNumber);

function inputNumber(event) {
    let data = event.target.dataset.input;
    if (display.textContent.length > 15) {
        return;
    }
    if (firstRun) {
        display.textContent = 0;
        memory = 0;
        lastOperation = 0;
        firstRun = false;
    }
    if (data) {
        if (data === '.') {
            if (!display.textContent.includes('.')) {
                display.textContent += data;
            }
        } else {
            display.textContent += data;
            if (!display.textContent.includes('.')) {
                display.textContent = Number(display.textContent);
            }
        }
    }
}
document.addEventListener('keydown', inputNumberKey)

function inputNumberKey(event) {
    let data = event.key;
    if (display.textContent.length > 15) {
        return;
    }
    if (firstRun) {
        display.textContent = 0;
        memory = 0;
        lastOperation = 0;
        firstRun = false;
    }
    if (data >= '0' && data <= '9' || data === '.') {
        if (display.textContent.length > 15) {
            return;
        }
        if (data === '.') {
            if (!display.textContent.includes('.')) {
                display.textContent += data;
            }
        } else {
            display.textContent += data;
            if (!display.textContent.includes('.')) {
                display.textContent = Number(display.textContent);
            }
        }
    }
};
equalButton.addEventListener('click', () => {
    clickCounter++
    beforeOperator.textContent = " ";
    if (clickCounter < 20) {
        let number = Number(display.textContent);
        if (lastOperation !== '' || lastOperation == "minus") {
            if (lastOperation == 'minus') {
                beforeNumber.textContent += " - " + display.textContent;
                display.textContent = memory - number;
            } else if (lastOperation == 'plus') {
                beforeNumber.textContent += " + " + display.textContent;
                display.textContent = memory + number;
            } else if (lastOperation == 'divide') {
                beforeNumber.textContent += " ÷ " + display.textContent;
                display.textContent = memory / number;
            } else if (lastOperation == 'multiply') {
                beforeNumber.textContent += " × " + display.textContent;
                display.textContent = memory * number;
            }
        }
    } else {
        display.textContent = 0;
        lastOperation = '';
        memory = 0;
        beforeNumber.textContent = 0;
        beforeOperator.textContent = " ";
        clickCounter = 0;
    }
});
document.addEventListener('keydown', (event) => {
    clickCounter++
    beforeOperator.textContent = " ";
    if (clickCounter < 20) {
        if (event.code == "NumpadEnter") {
            if (lastOperation !== '') {
                let number = Number(display.textContent);
                if (lastOperation == 'minus') {
                    beforeNumber.textContent += " - " + display.textContent;
                    display.textContent = memory - number;
                } else if (lastOperation == 'plus') {
                    beforeNumber.textContent += " + " + display.textContent;
                    display.textContent = memory + number;
                } else if (lastOperation == 'divide') {
                    beforeNumber.textContent += " ÷ " + display.textContent;
                    display.textContent = memory / number;
                } else if (lastOperation == 'multiply') {
                    beforeNumber.textContent += " × " + display.textContent;
                    display.textContent = memory * number;
                }
            }
        }
    } else {
        display.textContent = 0;
        lastOperation = '';
        memory = 0;
        beforeNumber.textContent = 0;
        beforeOperator.textContent = " ";
        clickCounter = 0;
    }
});
minusButton.addEventListener('click', () => {
    lastOperation = 'minus';
    memory = Number(display.textContent);
    beforeNumber.textContent = display.textContent;
    beforeOperator.textContent = "-";
    display.textContent = 0;

});
document.addEventListener('keydown', (event) => {
    if (event.code == "NumpadSubtract") {
        lastOperation = 'minus';
        memory = Number(display.textContent);
        beforeNumber.textContent = display.textContent;
        beforeOperator.textContent = "-";
        display.textContent = 0;
    }
});
plusButton.addEventListener('click', () => {
    lastOperation = 'plus';
    memory = Number(display.textContent);
    beforeNumber.textContent = display.textContent;
    beforeOperator.textContent = "+";
    display.textContent = 0;
});
document.addEventListener('keydown', (event) => {
    if (event.code == "NumpadAdd") {
        lastOperation = 'plus';
        memory = Number(display.textContent);
        beforeNumber.textContent = display.textContent;
        beforeOperator.textContent = "+";
        display.textContent = 0;
    }
});
multiplyButton.addEventListener("click", () => {
    lastOperation = 'multiply';
    beforeOperator.textContent = "×";
    memory = Number(display.textContent);
    beforeNumber.textContent = display.textContent
    display.textContent = 0;
    Percent.addEventListener("click", () => {
        display.textContent = Number(display.textContent / 100)
        beforeNumber.textContent = display.textContent;
        beforeOperator.textContent = "%";
    })
});
document.addEventListener('keydown', (event) => {
    if (event.code == "NumpadMultiply") {
        lastOperation = 'multiply';
        memory = Number(display.textContent);
        beforeNumber.textContent = display.textContent;
        beforeOperator.textContent = "×";
        display.textContent = 0;
        Percent.addEventListener("click", () => {
            display.textContent = Number(display.textContent / 100)
            beforeNumber.textContent = display.textContent;
            beforeOperator.textContent = "%";
        })
    }
});
divideButton.addEventListener('click', () => {
    lastOperation = 'divide';
    beforeNumber.textContent = display.textContent;
    beforeOperator.textContent = " ÷ ";
    memory = Number(display.textContent);
    display.textContent = 0;
});
document.addEventListener('keydown', (event) => {
    if (event.code == "NumpadDivide") {
        lastOperation = 'divide';
        memory = Number(display.textContent);
        beforeNumber.textContent = display.textContent;
        beforeOperator.textContent = "÷";
        display.textContent = 0;
    }
});
document.addEventListener('keydown', (event) => {
    if (event.code === "Backspace") {
        if (display.textContent.length == 1) {
            display.textContent = 0;
        } else {
            display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        }
    }
});
backButton.addEventListener('click', () => {
    if (display.textContent.length == 1) {
        display.textContent = 0;
    } else {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    }
});
squareXtoYButton.addEventListener('click', () => {
    clickCounter += 1;
    if (clickCounter % 2 === 1) {
        base = Number(display.textContent)
        if (display.textContent !== "") {
            let baseMemory = 0;
            beforeNumber.textContent = display.textContent;
            baseMemory = beforeNumber.innerHTML
            beforeOperator.innerHTML = `<i><sub>${baseMemory}</sub><sup>y</sup></i>`;
            display.textContent = 0;
        }
    } else {
        let baseMemory = beforeNumber.innerHTML;
        exponent = Number(display.textContent);
        let exponentMemory = 0;
        beforeNumber.textContent = display.textContent
        exponentMemory = beforeNumber.innerHTML
        beforeOperator.innerHTML = `<i><sub>${baseMemory}</sub><sup>${exponentMemory}</sup></i>`;
        console.log(exponentMemory, "  ", beforeNumber, " ", baseMemory);
        display.textContent = Math.pow(base, exponent)
        beforeNumber.textContent = "";
    }
});
toggle.addEventListener("click", () => {
    let absHandler = Number(display.textContent);
    if (absHandler < 0) {
        display.textContent = Math.abs(absHandler);
    } else if (absHandler > 0) {
        display.textContent = -Math.abs(absHandler);
    }
})
rootButton.addEventListener('click', () => {
    beforeNumber.textContent = display.textContent;
    display.textContent = Math.sqrt(display.textContent);
    lastOperation = '';
    beforeOperator.textContent = "√";
});
xx2Button.addEventListener("click", () => {
    beforeOperator.innerHTML = display.textContent + " " + '<i><sub>×</sub><sup>2</sup></i>';
    display.textContent **= 2;
    lastOperation = '';
})
clearButton.addEventListener('click', () => {
    display.textContent = 0;
    lastOperation = '';
    memory = 0;
    beforeNumber.textContent = 0;
    beforeOperator.textContent = " ";
});
clearDisplay.addEventListener("click", () => {
    display.textContent = 0;

})