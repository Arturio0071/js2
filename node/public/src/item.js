const item = Vue.component('goods-item', {
    template: '<div :data-id="id" class="goods-item"><h3>{{ title }}</h3><p>{{ price }}</p></div>',
    props: ['title', 'price', 'id']
})

export default {
    item: item
};