<template>
  <div class='wrapper'>
    <div class='img'>
      <img alt='sd' :src='productForBuy.img' />
    </div>
    <div class='mainContainer'>
      <div class='text'>
        <div class='title'>
          <div class='label'>{{ productForBuy.productName }}</div>
          <div class='info'>{{ productForBuy.productInfo }}</div>
        </div>
        <div>
          <svg @click='deleteProductFromCart' class='icon' width='20' height='20'>
            <path
              d='M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z'></path>
            <path
              class='a'
              d='M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z'></path>
          </svg>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productInCartContainer',
  props: ['product'],
  data() {
    return {
      productForBuy: {},
    };
  },
  // watch: {
  //   'productForBuy.newPrice': {
  //     immediate: true,
  //     handler(val) {
  //       console.log(val);
  //     },
  //   },
  // },
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
  padding-bottom: 10px;

  img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }

  .mainContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    .text {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;

      .label {
        font-size: 16px;
        font-weight: 600;
        color: #000;
      }

      .icon {

        path {
          fill: #373536;
        }

        &:hover {
          .a {
            transform: rotate(-10deg);
          }


          path {
            fill: $orange;
          }
        }
      }

      .info {
        font-size: 12px;
        color: rgb(115, 121, 140);
      }
    }

    .counter {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      .price {
        font-size: 18px;
        color: #000;
      }

      .counterbtn {
        color: rgb(115, 121, 140);
        padding: 5px 20px;
        font-size: 20px;
        border-radius: 30px;
        background: $gray-line;

        span {
          padding: 5px 8px;
        }
      }
    }
  }
}
</style>
