const goods = [
    { title: 'Shirt', price: 150, img: "img/noimg.jpg" },
    { title: 'Socks', price: 50, img: "img/noimg.jpg" },
    { title: 'Jacket', price: 350, img: "img/noimg.jpg" },
    { title: 'Shoes', price: 250, img: "img/noimg.jpg" },
];


const $goodsList = document.querySelector('.goods-list');

const renderGoodsItem = ({ title, price, img }) => {
    return `<div class="goods-item"><img src="${img}"><h3>${title}</h3><p>${price} $</p><button class="add_cart" type="button">В корзину</button></div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join('\n'); 

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}


class GetCart {
    constructor() {}
}


class GetItem {
    constructor() {}
    getSumm(){
        let fullSumm = 0;
        goods.forEach(items => {
            fullSumm += items.price;
        });
        return fullSumm;
    }
}

console.log(GetItem.prototype.getSumm());
renderGoodsList();