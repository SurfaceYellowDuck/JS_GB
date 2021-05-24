'use strict';
let magazine = {
    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageCloseBtnSrc: 'images/gallery/close.png',
    },
    basket: [
        {
            name: '',
            quantity: 0,
            cost: 0
        }
    ],
    catalog: [{
        articul: '23452',
        productName: 'Asus Zen Phone',
        productCost: 20000,
        quantity: 500
    },
    {
        articul: '12345',
        productName: 'MacBook Pro',
        productCost: 150000,
        quantity: 1000
    }
    ],
    score() {
        return this.basket.reduce((totalSum, productSum) => totalSum + productSum.cost * productSum.quantity, 0);
    },
    quantityElInBasket() {
        return this.basket.reduce((totalQuantity, productQuantity) => totalQuantity + productQuantity.quantity, 0)
    },
    basketChecker() {
        let BasketEl = document.getElementById('basketElements');
        if (this.basket.length == 1) { //Не менять на 0, иначе всё сломается
            BasketEl.insertAdjacentHTML('beforeend', '<div>Корзина пуста</div>')

        }
        else {
            BasketEl.insertAdjacentHTML('beforeend', `<div>Общая сумма корзины: ${magazine.score()}, количество товаров: ${this.quantityElInBasket()}</div>`);
            BasketEl.removeChild(BasketEl.getElementsByTagName('div')[0]);
        }
    },
    showBasket() {
        this.basketChecker();
        document.body.removeChild(document.getElementsByClassName('basketShow')[0]);
        let BasketDivElement = document.body.appendChild(document.createElement('div'));
        BasketDivElement.insertAdjacentHTML('afterbegin', '<h1>Корзина</h1>')
        BasketDivElement.classList.add('basketShow');
        for (let product = 1; product < magazine.basket.length; product++) {
            BasketDivElement.insertAdjacentHTML('beforeend', `<div>name: ${this.basket[product].name}</div>`);
            BasketDivElement.insertAdjacentHTML('beforeend', `<div>cost: ${this.basket[product].cost}</div>`);
            BasketDivElement.insertAdjacentHTML('beforeend', `<div>quantity: ${this.basket[product].quantity}</div><br>`);
        }
    },
    showCatalog() {
        let CatalogElement = document.body.appendChild(document.createElement('div'));
        CatalogElement.classList.add('catalog');
        CatalogElement.insertAdjacentHTML('afterbegin', '<h1>Каталог</h1>')
        let sliderCreator = document.getElementsByClassName('catalog')[0].appendChild(document.createElement('div'));
        sliderCreator.classList.add('sliderCreator')
        for (let product = 0; product < this.catalog.length; product++) {
            sliderCreator.insertAdjacentHTML('beforeend', `<input type="button" value="Купить" id='${this.catalog[product].articul}' >`);
            sliderCreator.insertAdjacentHTML('beforeend', `<img  src="photo/${this.catalog[product].articul}.jpg" class='catalogIMG' data-full_image_url='photo/bigIMG/${this.catalog[product].articul}.jpg' id='${this.catalog[product].articul}' >`)
            sliderCreator.insertAdjacentHTML('beforeend',
                `<div>articul: ${this.catalog[product].articul}</div>
            <div>product Name: ${this.catalog[product].productName}</div>
            <div>product Cost: ${this.catalog[product].productCost}</div>
            <div>product Quantity: ${this.catalog[product].quantity}</div>`);
        }
        //this.initPhoto();
    },
    init_() {
        let buttons = document.getElementsByTagName('input')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = this.catalogEventListener;
        }
    },
    catalogEventListener(eventObj) {
        let button = eventObj.target; // Получаю кнопку, на которую нажал юзер, к ней привязано свойство продукта articul .
        bigFor: for (let product = 0; product < magazine.catalog.length; product++) {  // Подбираю такой же продукт из каталога по значению articul
            if (magazine.catalog[product].articul == button.id) {
                for (let BasketEl = 0; BasketEl < magazine.basket.length; BasketEl++) { // Нужно добавить элемент в корзину, но если он там уже есть нужно просто увеличить его количество
                    if (magazine.basket[BasketEl].name == magazine.catalog[product].productName) {
                        magazine.basket[BasketEl].quantity++;
                        break bigFor;
                    }
                } magazine.basket.push({ 'name': magazine.catalog[product].productName, 'quantity': 1, 'cost': magazine.catalog[product].productCost });
                break;
            }
        } magazine.showBasket();
    }
}

const gallery = {
    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageCloseBtnSrc: 'photo/close.png',
    },

    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);

        document.querySelector(this.settings.previewSelector)
            .addEventListener('click', (event) => {
                this.containerClickHandler(event);
            });
    },

    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') return;
        this.openImage(event.target.dataset.full_image_url);
    },

    openImage(src) {
        this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
    },

    getScreenContainer() {
        const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);

        if (galleryWrapperElement) return galleryWrapperElement;

        return this.createScreenContainer();
    },

    createScreenContainer() {
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreenElement);

        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', () => {
            this.close();
        });
        galleryWrapperElement.appendChild(closeImageElement);

        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        galleryWrapperElement.appendChild(image);

        document.body.appendChild(galleryWrapperElement);

        return galleryWrapperElement;
    },

    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    },
};

