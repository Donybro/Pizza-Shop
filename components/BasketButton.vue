<template>
  <div class="wrapper">
    <div class="price">
      520 ₽
    </div>
    <div class="line" />
    <div class="basket">
      <img :src="basketLogo" alt="">
      <span>3</span>
    </div>
  </div>
</template>

<script>
import basketLogo from '../assets/img/cart.svg'

export default {
  name: 'BasketButton',
  data () {
    return {
      basketLogo
    }
  }
}
</script>

<style scoped lang='scss'>
@import "assets/scss/_variables.scss";

.wrapper {
  display: flex;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 15px 23px;
  border-radius: 30px;
  background-color: $orange;
  cursor: pointer;

  .price {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
  }

  .line {
    width: 1%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);

  }

  .basket {
    display: flex;
    align-items: center;

    span {
      margin-left: 9px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
    }
  }
}
</style>
