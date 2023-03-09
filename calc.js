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
    } else {
        a.textContent += ` ${ev.target.textContent} `;
    }
};


const equals = document.querySelector("#calc").onclick = calculation;
const operators = document.querySelectorAll('#operator');
operators.forEach(element => {
    element.addEventListener('click', operate)
});

