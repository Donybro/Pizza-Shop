<template>
  <div class='dialogContent' @click.stop>
    <h1 class='label'>Куда доставить?</h1>
    <div class='delivTypes'>
      <span class='deliv'
            @click='deliveryType="delivery"'
            :class='{"activeBtn":deliveryType==="delivery"}'>Доставка</span>
      <span class='pickup'
            @click='deliveryType="pickup"'
            :class='{"activeBtn":deliveryType==="pickup"}'>Самовывоз</span>
      <div class='line'></div>
    </div>
    <div class='contentType'>
      <div v-show='deliveryType==="delivery"'>
        <AdressForm class='content' />
      </div>
      <div v-show='deliveryType==="pickup"'>
        <Adresses class='content' />
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
</template>

<script>
import Adresses from './Adresses';
import AdressForm from './AdressForm';

export default {
  name: 'dialogAdressWrapper',
  props: ['activeDeliveryType'],
  components: { AdressForm, Adresses },
  data() {
    return {
      deliveryType: 'delivery',
    };
  },
  mounted() {
    this.deliveryType = this.activeDeliveryType;
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.dialogContent {
  margin: 2.5% 20%;
  background: #fff;
  position: relative;
  width: 830px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 30px;
  padding: 40px;

  .label {
    width: 100%;
  }

  .delivTypes {
    width: 100%;
    margin: 20px 0;
    position: relative;

    .deliv, .pickup {
      cursor: pointer;
      padding: 10px;
      font-size: 21px;
      font-weight: 500;
    }

    .line {
      margin-top: 10px;
      height: 1px;
      width: 100%;
      background: #dfdede;
    }
  }
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

.content {
  width: 80%;
}

.activeBtn {
  background: #fff;
  border: 1px solid #dfdede;
  border-radius: 3px;
  border-bottom: 1px solid #fff;
  color: $orange;
}
</style>
