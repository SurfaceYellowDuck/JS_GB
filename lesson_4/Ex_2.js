alert('Задание 2')


let magazine = {
    basket: [],
    addProduct() {
        while (true) {
            let name = prompt('Введите название продукта, если хотите выйти введите -1');
            if (name == -1) break;
            let quantity = Number(prompt('Введите количество продукта '));
            let cost = Number(prompt('Введите цену продукта '));
            this.basket.push({ 'name': name, 'quantity': quantity, 'cost': cost });
        }
    },
    score() {
        return this.basket.reduce((totalSum, productSum) => totalSum + productSum.cost * productSum.quantity, 0);
    }
};
magazine.addProduct();
console.log(magazine.score());