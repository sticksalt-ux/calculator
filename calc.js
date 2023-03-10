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
            if ((Number(b[0]) / Number(b[2])) % 1 === 0) {
                a.textContent = (Number(b[0]) / Number(b[2]));
            } else {
                a.textContent = (Number(b[0]) / Number(b[2])).toFixed(3);
            };
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



let fontFactor = 2;
function textSize() {

    let output = document.querySelector('#display').offsetWidth;
    let outputText = document.querySelector(".output-container");
    if (output >= 380) {
        outputText.style.fontSize = `${60 - fontFactor}px`;
        fontFactor += 3;
    }

    let a = document.querySelector('#display');
    if (a.textContent.split('').length < 11) {
        outputText.style.fontSize = '60px';
        fontFactor = 2;
    }
}

let button = document.querySelectorAll('button');
button.forEach(button => {
    button.addEventListener('click', textSize)
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
    const text = document.querySelector('#display')
    text.textContent = '';
});