<template>
  <div v-if="isDialogOpen" class="productDialog" @click.stop="closeDialog">
    <div class="dialogContent" @click.stop>
      <div class="image">
        <img :src="selectedProduct.img">
      </div>
      <div class="otherContent">
        <p class="label">
          {{ selectedProduct.name }}
        </p>
        <p class="info">
          {{ productInfo }}
        </p>
        <p class="label">
          {{ selectedProduct.description }}
        </p>
        <div class="">
          <option-group
            v-if="selectedProduct.sizes.length"
            :options="selectedProduct.sizes"
            option-type="размер-пиццы"
            @selectedOption="setOption"
          />
          <option-group
            v-if="selectedProduct.doughType.length"
            :options="selectedProduct.doughType"
            option-type="тип-теста"
            @selectedOption="setOption"
          />
        </div>
        <div v-if="selectedProduct.additionalProducts.length" class="">
          <p>Добавить в пиццу</p>
          <div class="additionalProducts">
            <additional-product
              v-for="product in selectedProduct.additionalProducts"
              :key="product.label"
              :product="product"
              @add-product-selected="setOption"
              @remove-product-selected="removeOption"
            />
          </div>
        </div>
        <add-to-basket-btn class="addToBasket" />
      </div>
      <svg
        class="svgCancel"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="closeDialog"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import OptionGroup from './OptionGroup'
import AdditionalProduct from './AdditionalProduct'
import AddToBasketBtn from './AddToBasketBtn'

export default {
  name: 'DialogMenu',
  components: { AddToBasketBtn, AdditionalProduct, OptionGroup },
  props: ['isDialogOpen', 'selectedProduct'],
  data () {
    return {
      productOptions: {}
    }
  },
  computed: {
    productInfo () {
      const pizzaSize = {
        ...this.selectedProduct.sizes.find(prod => prod.label === this.productOptions['размер-пиццы'])
      }
      return `${this.productOptions['размер-пиццы']} пицца ${pizzaSize.size} см, ${this.productOptions['тип-теста']} тесто.`
    }
  },
  methods: {
    closeDialog () {
      this.$emit('close-dialog')
    },
    setOption (prod) {
      this.productOptions = {
        ...this.productOptions,
        ...prod
      }
    },
    removeOption (optionName) {
      delete this.productOptions[optionName]
    }
  }
}
</script>

<style scoped lang='scss'>
@import "assets/scss/_variables.scss";

.additionalProducts {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.productDialog {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(1, 1, 1, .4);
}

.svgCancel {
  position: absolute;
  top: 10px;
  right: -40px;
  cursor: pointer;

  &:hover {
    width: 26px;
    height: 26px;
  }
}

.dialogContent {
  margin: 5% 20%;
  background: #fff;
  position: relative;
  width: 830px;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 30px;
  padding: 30px;

  .image {
    width: 60%;

    img {
      width: 100%;
      padding: 15px;
    }
  }

  .otherContent {
    width: 50%;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .addToBasket {
      display: inline-block;
    }
  }
}
</style>
