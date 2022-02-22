import { products } from './data/products.js';
import { item, sliderItem } from './templates/product-item.js';

const productsList = document.querySelector('.js_products__list');
const sliderList = document.querySelector('.js_slider__list');

products.forEach(product => {
    productsList.insertAdjacentHTML('beforeend',item(product));
})


products.slice(0, 4).forEach(product => {
    sliderList.insertAdjacentHTML('beforeend',sliderItem(product));
})