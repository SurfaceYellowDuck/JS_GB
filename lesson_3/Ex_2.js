//Задание 2
'use strict';
alert('Задание 2')
var basket = [];
function addProduct() {
    let name = prompt('Введите название продукта ');
    let quantity = Number(prompt('Введите количество продукта '));
    let cost = Number(prompt('Введите цену продукта '));
    basket.push([name, quantity, cost]);
}

function score() {
    let scoreOfOneProduct = 0;
    let totalScore = 0;
    for (let el of basket) {
        scoreOfOneProduct = el[1] * el[2];
        totalScore += scoreOfOneProduct;
    }
    return totalScore;
}

addProduct();
alert('Стоимость вашей корзины ' + score());
