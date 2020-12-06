<template>
  <div ref="appMain" class="main" :style="paddingRight">
    <navbar />
    <Menu />
    <categories class="stickyMenu" />
    <div class="productsWrapper">
      <product-container v-for="(a,i) in 12" :key="i" :product="product" @selected="setSelectedProduct" />
    </div>
    <dialog-menu :is-dialog-open="isDialogOpen" :selected-product="selectedProduct" @close-dialog="closeDialog" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Categories from '../components/Categories'
import ProductContainer from '../components/ProductContainer'
import DialogMenu from '../components/DialogMenu'

export default {
  components: { DialogMenu, ProductContainer, Categories, Menu, Navbar },
  data () {
    return {
      selectedProduct: {},
      firstAppWidth: null,
      product: {
        name: 'Сырная пицца',
        prices: [{
          label: 'Маленькая',
          price: 35000
        }, { label: 'Средняя', price: 45000 }, {
          label: 'Большая', price: 60000
        }],
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a9de393408e34b37ba00ba56a97fb64d_584x584.jpeg',
        description: 'Увеличенная порция моцареллы, томатный соус',
        sizes: [{ label: 'Большая', size: '35' }, { label: 'Средняя', size: '28' }, { label: 'Маленькая', size: '20' }],
        doughType: [{ label: 'Традиционное' }, { label: 'Тонкое' }],
        additionalProducts: [{
          label: 'Брынза',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF776AD5E9',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }]
        }, {
          label: 'Пикантная пеперони',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF34D3A25F',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }]
        },
        {
          label: 'Цыпленок',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAEC6D04E13',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }]
        }]
      }
    }
  },
  computed: {
    isDialogOpen () {
      return Object.keys(this.selectedProduct).length
    },
    paddingRight () {
      return {
        'padding-right': this.isDialogOpen ? `${45 + (window.innerWidth - this.firstAppWidth)}px` : '45px'
      }
    }
  },
  mounted () {
    this.firstAppWidth = this.$refs.appMain.clientWidth
  },
  methods: {
    closeDialog () {
      this.selectedProduct = {}
      document.body.style.overflow = 'auto'
    },
    setSelectedProduct (product) {
      this.selectedProduct = { ...product }
      document.body.style.overflow = 'hidden'
    }
  }
}
</script>

<style scoped lang='scss'>
@import "assets/scss/_variables.scss";

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
  justify-content: space-between;
}

.product {
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
