// Задание 8
function exponentiation(num, degree) {
    if (degree == 1) {
        return num;
    }
    return num * exponentiation(num, degree - 1);
}

console.log(exponentiation(2, 3));