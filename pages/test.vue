<template>
  <div class="main">
    <div class="">
      <option-group :product="product.doughType" />
    </div>
    <div class="">
      <option-group :product="product.sizes" />
    </div>
    <div class="a">
      <additional-product @add-product-selected="addProductHandler" />
    </div>
    <div class="">
      <add-to-basket-btn />
    </div>
  </div>
</template>

<script>
import OptionGroup from '../components/OptionGroup'
import AdditionalProduct from '../components/AdditionalProduct'
import AddToBasketBtn from '../components/AddToBasketBtn'

export default {
  name: 'Test',
  components: { AddToBasketBtn, AdditionalProduct, OptionGroup },
  data () {
    return {
      product: {
        name: 'Сырная пицца',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a9de393408e34b37ba00ba56a97fb64d_584x584.jpeg',
        description: 'Увеличенная порция моцареллы, томатный соус',
        sizes: [{ label: 'Большая', size: '35' }, { label: 'Средняя', size: '28' }, { label: 'Маленькая', size: '20' }],
        doughType: [{ label: 'Традиционное' }, { label: 'Тонкое' }],
        additionalProducts: [{
          label: 'Брынза',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }]
        }, {
          label: 'Пикантная пеперони',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }]
        },
        {
          label: 'Цыпленок',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }]
        }]
      }
    }
  },
  methods: {
    addProductHandler (prod) {
      console.log(prod)
    }
  }
}
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.main {
  width: 1000px;
  height: 1000px;
  background-color: $background;
  padding: 40px;
}

.a {
  margin-top: 10px;
}

.radioLabel {
  cursor: pointer;
}

.radio {
  cursor: pointer;
  opacity: 100%;
}
</style>
