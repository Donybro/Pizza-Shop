<template>
  <div class='wrapper'>
    <img
      v-show='!imageIsReady'
      :src='def'
      @click='showDialog'
    >
    <img
      v-show='imageIsReady'
      ref='img'
      src=''
      @click='showDialog'
    >
    <div class='text'>
      <div class='label'>
        {{ product.name }}
      </div>
      <div v-if='product.description' class='desc'>
        {{ product.description }}
      </div>
    </div>
    <div class='priceWrapper'>
      <div class='price'>
        <div class='from'>
          От {{ product.prices[0].price }} сум
        </div>
        <div class='select' @click='showDialog'>
          Выбрать
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import def from '../assets/img/pizza/default.svg';

export default {
  name: 'ProductContainer',
  props: ['product'],
  data() {
    return {
      def,
      imageIsReady: false,
    };
  },
  mounted() {
    this.setImgSrc();
  },
  methods: {
    setImgSrc() {
      this.$refs.img.src = this.product.img;
      this.$refs.img.onload = () => {
        this.imageIsReady = true;
      };
    },
    showDialog() {
      this.$emit('selected', {
        ...this.product,
      });
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapper {
  width: 250px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;

  img {
    width: 240px;
    height: 240px;
    cursor: pointer;
    margin-left: 20px;
    padding: 5px;
    transition-duration: 150ms;

    &:hover {
      transition-duration: 150ms;
      padding: 0;
    }
  }

  .text {
    padding: 0 13px;

    .label {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.01em;
      margin-bottom: 5px;
      height: 48px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #000000;
    }

    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      height: 85px;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.015em;
      color: #7278a9;
    }
  }

  .priceWrapper {
    width: 100%;
  }

  .price {
    margin-top: 13px;
    align-self: flex-start;
    display: flex;
    width: 100%;
    justify-content: space-between;

    .from {
      font-weight: bold;
      font-size: 16px;
      line-height: 17px;
      color: #000000;
      letter-spacing: 0.015em;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .select {
      cursor: pointer;
      font-size: 12px;
      line-height: 18px;
      font-weight: 600;
      letter-spacing: 0.045em;
      background: #fdefe5;
      color: #d1572c;
      border: 1px solid #EB5A1E;
      box-sizing: border-box;
      border-radius: 30px;
      padding: 6px 12px;
      margin-right: 10px;

      &:hover {
        background: $orange;
        color: #fff;
      }
    }
  }
}
</style>
