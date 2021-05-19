// Задание 3
function numFun(firstNum, secondNum) {
    if (firstNum > 0 && secondNum > 0) {
        console.log(firstNum - secondNum);
    }
    if (firstNum < 0 && secondNum < 0) {
        console.log(firstNum * secondNum);
    }
    else {
        console.log(firstNum + secondNum);
    }
}

numFun(2, -5);
