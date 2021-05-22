'use strict';
let magazine = {
    basket: [],
    catalog: [{
        articul: '23452',
        productName: 'Asus Zen Phone',
        productCost: '20000'
    },
    {
        articul: '12345',
        productName: 'MacBook Pro',
        productCost: '150000'
    }
    ],
    addProduct() {
        while (true) {
            let name = prompt('Введите название продукта, если хотите выйти введите -1');
            if (name == -1) break;
            let quantity = Number(prompt('Введите количество продукта '));
            let cost = Number(prompt('Введите цену продукта '));
            this.basket.push({ 'name': name, 'quantity': quantity, 'cost': cost });
            this.basketChecker();
            this.showBasket();
        }
    },
    score() {
        return this.basket.reduce((totalSum, productSum) => totalSum + productSum.cost * productSum.quantity, 0);
    },
    basketChecker() {
        let BasketEl = document.getElementById('basketElements');
        if (this.basket.length === 0) {
            BasketEl.insertAdjacentHTML('beforeend', '<div>Корзина пуста</div>')

        }
        else {
            BasketEl.insertAdjacentHTML('beforeend', `<div>Общая сумма корзины: ${magazine.score()}, количество товаров: ${this.basket.length}</div>`);
            BasketEl.removeChild(BasketEl.getElementsByTagName('div')[0]);
        }
    },
    showBasket() {
        let BasketDivElement = document.getElementsByClassName('basketShow')[0];
        for (let product = 0; product < this.basket.length; product++) {
            BasketDivElement.insertAdjacentHTML('afterbegin', `<div>name: ${this.basket[product].name}</div>`);
            BasketDivElement.insertAdjacentHTML('afterbegin', `<div>cost: ${this.basket[product].cost}</div>`);
            BasketDivElement.insertAdjacentHTML('afterbegin', `<div>quantity: ${this.basket[product].quantity}</div>`);
        }
    },
    showCatalog() {
        let CatalogElement = document.getElementById('catalog');
        for (let product = 0; product < this.catalog.length; product++) {
            CatalogElement.insertAdjacentHTML('afterbegin', `<div>articul: ${this.catalog[product].articul}</div>`);
            CatalogElement.insertAdjacentHTML('afterbegin', `<div>productName: ${this.catalog[product].productName}</div>`);
            CatalogElement.insertAdjacentHTML('afterbegin', `<div>productCost: ${this.catalog[product].productCost}</div>`);
        }
    }
};
