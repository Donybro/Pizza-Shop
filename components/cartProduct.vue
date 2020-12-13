<template>
  <div class='wrapper'>
    <div class='img'>
      <img alt='sd' :src='productForBuy.img' />
    </div>
    <div class='title'>
      <div class='label'>{{ productForBuy.productName }}</div>
      <div class='info'>
        {{ productForBuy.productInfo }}
        <br>
        {{ additionalProducts }}
      </div>
    </div>
    <div class='counter'>
      <div class='counterbtn'>
          <span class='minus' @click='decrementCount'>
            <svg width='10' height='10' class='icon'>
              <rect fill='#454B54' y='4' width='10' height='2' rx='1'></rect>
            </svg>
          </span>
        {{ productForBuy.count }}
        <span @click='incrementCount' class='plus'>
            <svg width='10' height='10' class='icon'>
              <g fill='#454B54'>
                <rect x='4' width='2' height='10' ry='1'></rect>
                <rect y='4' width='10' height='2' rx='1'></rect>
              </g>
            </svg>
          </span>
      </div>
      <div class='price'>{{ productForBuy.overallPrice }} сум</div>
      <img :src='deleteLogo'>
    </div>
  </div>
</template>

<script>
import deleteLogo from '../assets/img/delete-black-24dp.svg';

export default {
  name: 'cartProduct',
  props: ['product'],
  data() {
    return {
      productForBuy: {},
      deleteLogo,
    };
  },
  computed: {
    additionalProducts() {
      return Object.keys(this.product['добавочные продукты'].names).length ?
        `Добавочные продукты : ${this.product['добавочные продукты'].names}` : '';

    },
  },
  mounted() {
    this.productForBuy = { ...this.product };
  },
  methods: {
    incrementCount() {
      this.productForBuy.count = this.productForBuy.count + 1;
      this.productForBuy.overallPrice = this.productForBuy.count * this.productForBuy.price;
      this.$store.dispatch('products/changeProduct', this.productForBuy);
    },
    decrementCount() {
      if (this.productForBuy.count <= 1) {
        return null;
      } else {
        this.productForBuy.count = this.productForBuy.count - 1;
        this.productForBuy.overallPrice = this.productForBuy.count * this.productForBuy.price;
        this.$store.dispatch('products/changeProduct', this.productForBuy);
      }
    },
    deleteProductFromCart() {
      this.$store.dispatch('products/deleteProduct', {
        productName: this.productForBuy.productName,
        productInfo: this.productForBuy.productInfo,
      });
      this.$emit('rerender-carts');
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapper {
  display: flex;
  flex-wrap: nowrap;
  background: #fff;
  width: 700px;
  border-bottom: 2px solid $gray-line;

  .img {
    width: 20%;

    img {
      width: 120px;
      height: 120px;
      margin-right: 10px;
    }
  }


  .title {
    width: 40%;

    .label {
      font-size: 20px;
      font-weight: 600;
      color: #000;
    }

    .info {
      font-size: 15px;
      color: rgb(115, 121, 140);
    }
  }


}

.counter {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 40%;

  .counterbtn {
    color: rgb(64, 64, 64);
    padding: 5px 20px;
    font-size: 20px;
    border-radius: 30px;
    background: $gray-line;
    margin-right: 10px;

    span {
      padding: 5px 8px;
    }
  }

  .price {
    width: 40%;
    font-size: 18px;
    color: #000;
  }

  img {
    width: 30px;
    height: 30px;

    &:hover {
      filter: invert(44%) sepia(33%) saturate(5675%) hue-rotate(4deg) brightness(107%) contrast(103%);
    }
  }
}

</style>
