<template>
  <div class='wrapper' @mouseover.stop='showDialogMenu' @mouseout.stop='hideDialogMenu'>
    Корзина
    <img :src='basketLogo' alt='basket' />
    {{ productsAmount }}
    <div v-if='showDialog'
         @mouseover.stop='showDialogMenu'
         @mouseout.stop='hideDialogMenu'
         class='dialogWrapper'
         :key='key'
    >
      <div @click.prevent v-if='productsInCart.length'>
        <product-in-cart-container
          class='productFromCart'
          v-for='product in productsInCart'
          :product='product'
          :key='product.name'
          @rerender-carts='key++'
        />
      </div>
      <div @click.prevent v-else class='emptycartWrapper'>
        <empty-cart class='emptycart' />
        <div class='label'>Ой, пусто!</div>
        <div>Мы всегда доставляем бесплатно,
          но сумма заказа должна быть от 38 000 сум
        </div>
      </div>
      <div @click.prevent v-if='productsInCart.length' class='overallPrice'>
        Сумма к оплате {{ productsOverallPrice }}
      </div>
    </div>
  </div>
</template>

<script>
import basketLogo from '../assets/img/cart.svg';
import ProductInCartContainer from './productInCartContainer';
import EmptyCart from './emptyCart';

export default {
  name: 'basketButton',
  components: { EmptyCart, ProductInCartContainer },
  data() {
    return {
      basketLogo,
      showDialog: false,
      timeout: null,
      key: 1,
    };
  },
  computed: {
    productsInCart() {
      return this.$store.getters['products/getProducts'];
    },
    productsAmount() {
      return this.productsInCart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.count;
      }, 0);
    },
    productsOverallPrice() {
      return this.productsInCart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.overallPrice;
      }, 0);
    },
  },
  methods: {
    showDialogMenu() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      } else {
        this.showDialog = true;
      }

    },
    hideDialogMenu() {
      this.timeout = setTimeout(() => {
        this.showDialog = false;
        this.timeout = null;
      }, 900);
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.emptycartWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 10px;

  div {
    color: #000;
    width: 250px;
    text-align: center;
    margin: 10px 0;
  }

  .label {
    font-size: 22px;
  }
}

.wrapper {
  border-radius: 30px;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  position: relative;

  img {
    margin: 0 5px;
  }

  .dialogWrapper {
    background-color: #fff;
    width: 350px;
    position: absolute;
    top: calc(100% + 10px);
    right: -30px;
    padding: 3px;
    padding-top: 8px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
}

.productFromCart {
  border-bottom: 1px dashed rgb(226, 226, 233);
  border-radius: 0;
  margin-bottom: 5px;
}

.overallPrice {
  color: #000;
  font-size: 18px;
  padding: 10px 0 10px 10px;
}
</style>
