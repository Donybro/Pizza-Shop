<template>
  <div class='wrapper'>
    Корзина
    <img :src='basketLogo' />
    {{ productsInCart }}
  </div>
</template>

<script>
import basketLogo from '../assets/img/cart.svg';

export default {
  name: 'AccountBtn',
  data() {
    return {
      basketLogo,
    };
  },
  computed: {
    productsInCart() {
      return (this.$store.getters['products/getProducts']).length;
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapper {
  border-radius: 30px;
  background-color: $orange;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;

  img {
    margin: 0 5px;
  }
}

</style>
