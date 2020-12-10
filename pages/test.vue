<template>
  <div class='main'>
  </div>
</template>

<script>
import OptionGroup from '../components/OptionGroup';
import AdditionalProduct from '../components/AdditionalProduct';
import AddToBasketBtn from '../components/AddToBasketBtn';
import BasketButton from '../components/BasketButton';

export default {
  name: 'Test',
  components: { BasketButton, AddToBasketBtn, AdditionalProduct, OptionGroup },
  data() {
    return {
      product: {
        name: 'Сырная пицца',
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a9de393408e34b37ba00ba56a97fb64d_584x584.jpeg',
        description: 'Увеличенная порция моцареллы, томатный соус',
        sizes: [{ label: 'Большая', size: '35' }, { label: 'Средняя', size: '28' }, { label: 'Маленькая', size: '20' }],
        doughType: [{ label: 'Традиционное' }, { label: 'Тонкое' }],
        additionalProducts: [{
          label: 'Брынза',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        }, {
          label: 'Пикантная пеперони',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        },
          {
            label: 'Цыпленок',
            types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
          }],
      },
    };
  },
  methods: {
    addProductHandler(prod) {
      console.log(prod);
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.main {
  width: 1000px;
  height: 1000px;
  background-color: $background;
  padding: 40px;
}

</style>
