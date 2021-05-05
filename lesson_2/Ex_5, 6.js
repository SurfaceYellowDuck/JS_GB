// Задание 5, 6
function summa(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function composition(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function userOperation(firstNum, secondNum, sign) {
    switch (sign) {
        case '+':
            return summa(firstNum, secondNum);
        case '-':
            return difference(firstNum, secondNum);
        case '*':
            return composition(firstNum, secondNum);
        case '/':
            return division(firstNum, secondNum);
    }
}
console.log(userOperation(2, 3, '+'));