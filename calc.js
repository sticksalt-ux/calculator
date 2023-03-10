const calculation = function() {
    let a = document.querySelector('#display');
    let b = a.textContent.split(' ');
    switch (b[1]) {
        case '+':
            a.textContent = (Number(b[0]) + Number(b[2]));
            break;
        case '-':
            a.textContent = (Number(b[0]) - Number(b[2]));
            break;
        case '*':
            a.textContent = (Number(b[0]) * Number(b[2]));
            break;
        case '÷':
            a.textContent = (Number(b[0]) / Number(b[2]));
            break;
        default:
            a.textContent += '';
            break;
    }
}

const operate = function(ev) {
    let a = document.querySelector('#display');
    let b = a.textContent.split(' ');
    if (b.length > 2) {
        calculation();
        a.textContent += ` ${ev.target.textContent} `;
    } else {
        a.textContent += ` ${ev.target.textContent} `;
    }
};


const equals = document.querySelector("#calc").onclick = calculation;
const operators = document.querySelectorAll('#operator');
operators.forEach(element => {
    element.addEventListener('click', operate)
});



let fontFactor = 3;
function textSize() {
    let output = document.querySelector('#display').offsetWidth;
    let outputText = document.querySelector(".output-container");
    console.log(output, outputText)
    if (output >= 380) {
        outputText.style.fontSize = `${60 - fontFactor}px`
        fontFactor += 3;
    }
}

let button = document.querySelectorAll('button');
button.forEach(button => {
    button.addEventListener('click', textSize)
});