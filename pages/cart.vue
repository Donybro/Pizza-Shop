<template>
  <div class='main'>
    <div class='navbar'>
      <div class='logoWrapper'>
        <img :src='pizzaLogo' class='' alt=''>
        <div class='logoText'>
          <div class='title'>
            Pizza-Shop
          </div>
          <div class='desc'>
            Самая вкусная <span class='extra'>пицца</span> во вселенной.
          </div>
        </div>
      </div>
      <div class='stepper'>
        <div class='first stepCompleted'>
          <!--          <img class='done' :src='done'>-->
          1
        </div>
        <div class='bordered'></div>
        <div class='second'>2</div>
        <div class='bordered'></div>
        <div class='third'>3</div>
      </div>
    </div>
    <div class='basket'>
      <h1>Корзина</h1>
      <div class='productsWrapper'>
        <cart-product v-for='product in productsInCart' :key='product.productName' :product='product'
                      class='product' />
      </div>
      <div v-if='!productsInCart.length' class='price'>
        Добавьте что-нибудь из меню
      </div>
      <div class='price'>
        Сумма заказа: <span>{{ productsOverallPrice }} сум</span>
      </div>
      <div class='buttonGroup'>
        <div @click='$router.push("/")' class='prev'>Вернуться в меню</div>
        <div @click='orderProduct' class='next'>Оформить заказ</div>
      </div>
    </div>
  </div>
</template>

<script>
import pizzaLogo from '../assets/img/pizza-logo.svg';
import done from '../assets/img/done-black-24dp.svg';
import CartProduct from '../components/cartProduct';

export default {
  name: 'cart',
  components: { CartProduct },
  data() {
    return {
      pizzaLogo,
      done,
    };
  },
  computed: {
    productsInCart() {
      return this.$store.getters['products/getProducts'];
    },
    productsOverallPrice() {
      return this.productsInCart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.overallPrice;
      }, 0);
    },
  },
  methods: {
    orderProduct() {
      if (!this.productsInCart.length) {
        this.$router.push('/');
      }
      if (!this.$store.getters['auth/getIsAuth']) {
        this.$router.push('/auth');
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.main {
  background-color: $background;
  height: 100%;
  padding: 45px;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: normal;
  padding: 35px 40px 35px 70px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 2px dashed #F6F6F6;
  background: #fff;


  .stepper {
    width: 30%;
    display: flex;
    justify-content: space-around;

    .bordered {
      background-image: linear-gradient(to right, rgb(175, 175, 175) 22%, rgb(255, 255, 255) 0%);
      background-position: bottom;
      background-size: 28px 2px;
      background-repeat: repeat-x;
      height: 50%;
      width: 30%;
    }


    .borderedCompleted {
      border-bottom: 2px solid $orange;
      background-image: none;
    }

    .first, .second, .third {
      border: 2px solid rgb(175, 175, 175);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: rgb(175, 175, 175);
    }

    .stepCompleted {
      border: 2px solid $orange;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $orange;

      img {
        width: 40px;
        filter: invert(44%) sepia(33%) saturate(5675%) hue-rotate(4deg) brightness(107%) contrast(103%);
      }
    }
  }
}

.extra {
  color: #fe5f1e;
}

.logoWrapper {
  display: flex;
  align-items: center;

  img {
    width: 38px;
    height: 38px;
  }

  .logoText {
    margin-left: 17px;
  }

  .title {
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: $black;

  }

  .desc {
    font-size: 16px;
    line-height: 19px;
    color: #7B7B7B;

  }
}

.basket {
  padding: 20px 100px;
  background: #fff;

  .productsWrapper {
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .product {
      margin-bottom: 10px;
    }
  }
}

.price {
  padding: 50px 0;
  font-size: 31px;
  font-weight: 700;

  span {
    font-size: 32px;
    color: rgb(255, 105, 0);
    font-weight: 700;
  }
}

.buttonGroup {
  display: flex;
  justify-content: space-between;

  .prev, .next {
    border-radius: 30px;
    font-size: 16px;
    line-height: 24px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .prev {
    background-color: rgb(243, 243, 247);
    color: rgb(92, 99, 112);
    border: 1px solid rgb(92, 99, 112);
  }

  .next {
    background-color: #fe5f1e;
    color: #fff;
    border: 1px solid #fe5f1e;
  }
}
</style>
