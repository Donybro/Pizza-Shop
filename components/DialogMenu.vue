<template>
  <div v-if='isDialogOpen' class='productDialog' @click.stop='closeDialog'>
    <div class='dialogContent' @click.stop>
      <div class='image'>
        <img :src='selectedProduct.img'>
      </div>
      <div class='otherContent'>
        <p class='label'>
          {{ selectedProduct.name }}
        </p>
        <p class='info'>
          {{ selectedProduct.doughType.length ? productInfo : selectedProduct.info }}
        </p>
        <p class='desc'>
          {{ selectedProduct.description }}
        </p>
        <div class=''>
          <option-group
            v-if='selectedProduct.sizes.length'
            :options='selectedProduct.sizes'
            option-type='размер-пиццы'
            @selectedOption='setProductOption'
          />
          <option-group
            v-if='selectedProduct.doughType.length'
            :options='selectedProduct.doughType'
            option-type='тип-теста'
            @selectedOption='setProductOption'
          />
        </div>
        <div v-if='selectedProduct.additionalProducts.length' class=''>
          <p class='addToPizza'>Добавить в пиццу</p>
          <div class='additionalProducts'>
            <additional-product
              v-for='product in selectedProduct.additionalProducts'
              :key='product.label'
              :product='product'
              @add-product-selected='setProductOption'
              class='additionalProduct'
              :pizza-size='pizzaSize'
            />
          </div>
        </div>
        <div class='basketBtnWrapp' @click='addToBasket'>
          <add-to-basket-btn class='addToBasket' :class="{'disabledBtn' : btnIsDisabled}"
                             :price='this.prices ? this.prices : this.selectedProduct.prices[0].price' />
        </div>
      </div>
      <svg
        class='svgCancel'
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        @click='closeDialog'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z'
          fill='white'
        />
      </svg>
    </div>
  </div>
</template>

<script>
import OptionGroup from './OptionGroup';
import AdditionalProduct from './AdditionalProduct';
import AddToBasketBtn from './AddToBasketBtn';

export default {
  name: 'DialogMenu',
  components: { AddToBasketBtn, AdditionalProduct, OptionGroup },
  props: ['isDialogOpen', 'selectedProduct'],
  data() {
    return {
      productToBuy: {},
      btnIsDisabled: false,
      pizzaSize: '',
    };
  },
  computed: {
    productInfo() {
      const pizzaSize = {
        ...this.selectedProduct.sizes.find(prod => prod.label === this.$store.getters['currentSelectedProduct/getPizzaSize']),
      };
      return `${this.$store.getters['currentSelectedProduct/getPizzaSize']} пицца ${pizzaSize.size} см, ${this.$store.getters['currentSelectedProduct/getDoughType']} тесто.`;
    },
    prices() {
      const pizzaPrice = {
        ...this.selectedProduct.prices.find(prod => prod.label === this.$store.getters['currentSelectedProduct/getPizzaSize']),
      };
      let result = pizzaPrice.price;
      if (this.$store.getters['currentSelectedProduct/getDoughType'] === 'Тонкое') {
        result += 5000;
      }
      let fromAdditionalProducts = this.$store.getters['selectedAdditionalProduct/getPrice'] || 0;
      // let fromAdditionalProducts = this.$store.getters['selectedAdditionalProduct/getPrice'] || this.productToBuy['добавочные продукты'].prices;
      return result + fromAdditionalProducts;
    },
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
    setProductOption(prod) {
      this.productToBuy = {
        ...this.productToBuy,
        ...prod,
      };
      if (prod.hasOwnProperty('размер-пиццы')) {
        this.$store.dispatch('currentSelectedProduct/setPizzaSize', prod['размер-пиццы']);
      }
      if (prod.hasOwnProperty('тип-теста')) {
        this.$store.dispatch('currentSelectedProduct/setDoughType', prod['тип-теста']);
      }
      this.pizzaSize = this.$store.getters['currentSelectedProduct/getPizzaSize'];
    },
    addToBasket() {
      this.productToBuy = {
        ...this.productToBuy,
        productName: this.selectedProduct.name,
        img: this.selectedProduct.img,
        price: this.prices ? this.prices : this.selectedProduct.prices[0].price,
        overallPrice: this.prices ? this.prices : this.selectedProduct.prices[0].price,
        productInfo: this.selectedProduct.doughType.length ? this.productInfo : this.selectedProduct.info,
        'добавочные продукты': {
          names: this.$store.getters['selectedAdditionalProduct/getNames'],
          prices: this.$store.getters['selectedAdditionalProduct/getPrice'],
        },
        count: 1,
      };
      this.btnIsDisabled = !this.btnIsDisabled;
      this.$store.dispatch('products/setProduct', this.productToBuy);
      this.productToBuy = {};
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/_variables.scss";

.additionalProducts {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 10px;
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
  padding: 20px;

  .image {
    width: 60%;

    img {
      width: 100%;
      padding: 15px;
    }
  }

  .otherContent {
    width: 50%;
    display: flex;
    flex-direction: column;

    .label {
      font-size: 24px;
      line-height: 28px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .info {
      font-size: 14px;
      line-height: 10px;
      color: rgb(115, 121, 140);
      margin-bottom: 5px;
    }

    .desc {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 5px;
    }

    .addToPizza {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .additionalProduct {
      margin-left: 10px;
    }

    .disabledBtn {
      pointer-events: none;
      opacity: 0.4;
    }


    .basketBtnWrapp {
      justify-self: end;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: flex-end;
    }

    .addToBasket {

    }
  }
}

</style>
