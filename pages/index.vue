<template>
  <div ref='appMain' class='main' :style='paddingRight'>
    <navbar />
    <Menu class='stickyMenu' />
    <div class='loader' v-if='loading'>
      <spinner size='huge' line-fg-color='#fd6900' />
    </div>
    <div v-else class='productsWrapper'>
      <product-container v-for='(product,i) in products' :key='i' :product='product' @selected='setSelectedProduct'
                         class='product' />
    </div>
    <dialog-menu :is-dialog-open='isDialogOpen' :selected-product='selectedProduct' @close-dialog='closeDialog' />
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import ProductContainer from '../components/ProductContainer';
import DialogMenu from '../components/DialogMenu';
import fakeApi from '../src/fakeApi';
import Spinner from 'vue-simple-spinner';
import BasketButton from '../components/BasketButton';

export default {
  components: { BasketButton, DialogMenu, ProductContainer, Categories, Menu, Navbar, Spinner },
  data() {
    return {
      selectedProduct: {},
      firstAppWidth: null,
      products: [],
      loading: true,
    };
  },
  computed: {
    isDialogOpen() {
      return Object.keys(this.selectedProduct).length;
    },
    paddingRight() {
      return {
        'padding-right': this.isDialogOpen ? `${45 + (window.innerWidth - this.firstAppWidth)}px` : '45px',
      };
    },
    selectedCategory() {
      return this.$store.getters['category/getCategory'];
    },
  },
  watch: {
    selectedCategory: {
      immediate: true,
      handler(categoryName) {
        this.getDataFromApi(categoryName);
      },
    },
  },
  async mounted() {
    this.firstAppWidth = this.$refs.appMain.clientWidth;
  },
  methods: {
    closeDialog() {
      this.selectedProduct = {};
      document.body.style.overflow = 'auto';
    },
    setSelectedProduct(product) {
      this.selectedProduct = { ...product };
      document.body.style.overflow = 'hidden';
    },
    async getDataFromApi(dataName) {
      this.$store.dispatch('selectedAdditionalProduct/clearAllProducts');
      this.loading = true;
      this.products = await fakeApi.getProduct(dataName);
      if (this.products.length) {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/_variables.scss";

.loader {
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  background-color: #fff;
  padding-top: 10%;
}

.main {
  background-color: $background;
  height: 100%;
  padding: 45px;

  .stickyMenu {
    position: sticky;
    top: 0;
  }
}

.productsWrapper {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding: 30px;
}

.product {
  margin-left: 30px;
  margin-bottom: 50px;
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
  margin: 5% auto;
  background: #fff;
  position: relative;
  width: 830px;
  height: 510px;
  border-radius: 30px;
  padding: 30px;
}
</style>
