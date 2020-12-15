<template>
  <div class='wrapperAdditionalProduct' :class="{'selected':isSelected}" @click='selectProduct'>
    <img v-show='!imageIsReady' :src='def'>
    <img v-show='imageIsReady' ref='img' src='' alt='no-image'>
    <p class='label'>
      {{ product.label }}
    </p>
    <p class='price'>
      {{ price }}
    </p>
    <svg v-if='isSelected' width='20' height='20' fill='none' class='added-icon'>
      <circle cx='10' cy='10' r='10' fill='#fff' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10 3.25c3.74 0 6.75 3.01 6.75 6.75s-3.01 6.75-6.75 6.75S3.25 13.74 3.25 10 6.26 3.25 10 3.25zM18.25 10c0-4.57-3.68-8.25-8.25-8.25S1.75 5.43 1.75 10s3.68 8.25 8.25 8.25 8.25-3.68 8.25-8.25z'
        fill='#FF6900'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12.881 8.076a.6.6 0 010 .848l-3.638 3.639a.6.6 0 01-.849 0l-1.818-1.82a.6.6 0 11.848-.848L8.82 11.29l3.214-3.214a.6.6 0 01.848 0z'
        fill='#FF6900'
      />
    </svg>
  </div>
</template>

<script>
import def from '../assets/img/pizza/default.svg';

export default {
  name: 'AdditionalProduct',
  props: ['product', 'pizzaSize'],
  data() {
    return {
      imageIsReady: false,
      def,
      isSelected: false,
    };
  },
  mounted() {
    this.setImgSrc();
  },
  watch: {
    pizzaSize() {
      if (this.isSelected) {
        this.emitProduct();
      }
    },
  },
  computed: {
    price() {
      const additionalProd = { ...this.product.types.find((prod) => prod.label === this.pizzaSize) };
      return additionalProd.price;
    },
  },
  methods: {
    selectProduct() {
      this.isSelected = !this.isSelected;
      console.log(this.isSelected);
      if (this.isSelected) {
        this.emitProduct();
      } else {
        console.log(this.product.label, 'aaaa');
        this.$store.dispatch('selectedAdditionalProduct/clearProduct', {
          label: this.product.label,
          price: this.price,
        });
      }
    },
    setImgSrc() {
      this.$refs.img.src = this.product.img;
      this.$refs.img.onload = () => {
        this.imageIsReady = true;
      };
    },
    emitProduct() {
      console.log(this.product.label, 'dddd');
      this.$store.dispatch('selectedAdditionalProduct/setProduct', {
        label: this.product.label,
        price: this.price,
      });
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapperAdditionalProduct {
  position: relative;
  width: 106px;
  height: 166px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  transition-delay: 0s;
  transition-property: box-shadow, border;
  cursor: pointer;
  background: #fff;
  user-select: none;
  box-shadow: rgba(6, 5, 50, 0.12) 0px 4px 20px;

  &:hover {
    box-shadow: rgba(6, 5, 50, 0.12) 0px 0px 8px;
  }

  img {
    width: 90px;
    height: 90px;
  }

  .label {
    height: 32px;
    width: 80px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;

  }

  .price {
    font-size: 16px;
    line-height: 20px;
  }
}

.selected {
  border: 1px solid $orange;
}

.added-icon {
  position: absolute;
  top: 2px;
  right: 5px;
}
</style>
