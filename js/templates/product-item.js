export const item = (product) => {

  return `
    <li class="item">
      
  <div class="product__block js_product glass glass-m" id="${product.id}" data-aos="fade-up" data-aos-duration="1000">

  <div class="product__img-box">
    
     <img src="${product.image}" alt="" class="img">

    </div>
  
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
    
      <span class="product__price">
      $${(product.price).toFixed(2)}
      </span>
      </div>
      <div class="product__btn-block">
      <a href="product-page.html?id=${product.id}" class="btn btn--first" style="margin: ${product.type == "ring" || product.type == "clothing" ? 'auto' : ''}">details</a>
      ${
        product.type == "ring" || product.type == "clothing" ? '' : '<button class="btn js_add-to-cart">buy</button>'
      }
    </div>
 
    
</div>

  </li>
    `
}


export const sliderItem = (product) => {

  return `
  <div class="swiper-slide">
      <div class="swiper-slide__img-box">
          <img src="${product.image}" alt="" class="swiper-slide__img">
      </div>
      <p class="swiper-slide__name js_product-name">${product.name}</p>
      <div class="swiper-slide__price-box">
          <span class="swiper-slide__price">$${(product.price).toFixed(2)}</span>
          <a href="product-page.html?id=${product.id}" class="swiper-slide__btn">more info</a>
      </div>
  </div>
  `
}


