class Api {
    constructor() {
        this.url = '/goods.json';
    }

    fetch(error, success) {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(JSON.parse(xhr.responseText));
                } else if (xhr.status > 400) {
                    error('Ошибка');
                }
            }
        }

        xhr.open('GET', this.url, true);
        xhr.send();
    }



    fetchPromise() {
        return new Promise((resolve, reject) => {
            this.fetch(reject, resolve)
        })
    }
}


class GoodsList {
    constructor() {
        this.api = new Api();
        this.$goodsList = document.querySelector('.goods-list');
        this.goods = [];
        const fetch = this.api.fetchPromise();

        fetch.then((data) => { this.onFetchSuccess(data) })
            .catch((err) => { this.onFetchError(err) });

        console.log(fetch);
    }


    addCartItem(index) {
        this.cart.addToCart(this.goods[index]);
    }

    delCartItem(index) {
        this.cart.delToCart(this.goods[index]);
    }

    onFetchSuccess(data) {
        this.goods = data.map(({ title, price }) => new GoodsItem(title, price));
        this.render();
    }

    onFetchError(err) {
        this.$goodsList.insertAdjacentHTML('beforeend', `<h3>${err}</h3>`);
    }

    render() {
        this.$goodsList.textContent = '';
        this.goods.forEach((good) => {
            this.$goodsList.insertAdjacentHTML('beforeend', good.getHtml());
        })
    }
}

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    getHtml() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} $</p></div>`;
    }
}


class Cart {
    constructor() {
        this.goods = [];
    }
    addToCart(item) {
        this.goods.push(item);
    }

    delToCart() {
        this.goods.splice(item, 1);
    }
}


class GetItem {
    constructor() {
    }
    getSumm(data) {
        let fullSumm = 0;
        goods.forEach(items => {
            fullSumm += items.price;
        });
        return fullSumm;
    }
}


const goodsList = new GoodsList();