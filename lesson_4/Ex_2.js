alert('Задание 2')
//Вариант 1

// let magazine = {
//     basket: [],
//     addProduct() {
//         while (true) {
//             let name = prompt('Введите название продукта, если хотите выйти введите -1');
//             if (name == -1) break;
//             let quantity = Number(prompt('Введите количество продукта '));
//             let cost = Number(prompt('Введите цену продукта '));
//             this.basket.push([name, quantity, cost]);
//         }
//     },
//     score() {
//         let scoreOfOneProduct = 0;
//         let totalScore = 0;
//         for (let el of this.basket) {
//             scoreOfOneProduct = el[1] * el[2];
//             totalScore += scoreOfOneProduct;
//         }
//         return totalScore;
//     }
// }
// magazine.addProduct();
// console.log(magazine.score());

//Вариант 2

let basket = {
    matherboard: {
        name: 'asus',
        cost: 1200,
        quantity: 600
    },
    processor: {
        name: 'amd',
        cost: 5000,
        quantity: 800
    }
}
let basketInfo = {
    basket,
    totalScore: 0,
    score() {
        for (let el in basket) {
            this.totalScore += basket[el].cost * basket[el].quantity;
        }
    }
}

basketInfo.score();
alert(basketInfo.totalScore);

