<template>
  <div class='wrapperOrderList'>
    <div class='label'>Состав заказа</div>
    <div class='productWrapper' v-for='product in productsInCart' :key='product.productName'>
      <div class='prod'>
        <div class='prodName'>{{ product.productName }}</div>
        <div class='prodinfo'>
          {{
            product.productInfo
          }}{{
            product['добавочные продукты'].names.length ? ` Добавочные продукты : ${product['добавочные продукты'].names}` : ''
          }}
        </div>
      </div>
      <div class='prodPrice'>{{ product.overallPrice }}сум</div>
    </div>
    <div class='overallPrice'>
      <div class='title'>Стоимость заказа</div>
      <div class='price'>{{ productsOverallPrice }}сум</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  computed: {
    productsOverallPrice() {
      return this.productsInCart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.overallPrice;
      }, 0);
    },
    productsInCart() {
      return this.$store.getters['products/getProducts'];
    },
  },
};
</script>

<style scoped lang='scss'>
.wrapperOrderList {
  padding: 20px;

  .label {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .productWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 1px dashed #ccc;
  }

  .prod {
    display: flex;
    flex-direction: column;

    .prodName {
      font-size: 16px;
      line-height: 1.4;
      font-weight: 400;
    }

    .prodinfo {
      color: rgb(115, 121, 140);
      font-size: 12px;
      line-height: 1.35;
    }
  }

  .prodPrice {
    padding-top: 7px;
    font-size: 16px;
  }

  .overallPrice {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 16px;
      line-height: 1.4;
      font-weight: 400;

    }

    .price {
      font-size: 18px;
    }
  }
}
</style>
