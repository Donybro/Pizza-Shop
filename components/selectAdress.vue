<template>
  <div class='wrapperSelectedAdress'>
    <div class='label'>Адрес пиццерии</div>
    <div class='wrapper'>
      <div class='adressName'>{{ placeHolder }}</div>
      <span @click='openDialogAdress("pickup")' class='change'>Изменить</span>
      <span @click='openDialogAdress("delivery")' class='chooseAdress'>Выбрать тип доставки</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectAdress',
  props: ['placeHolder'],
  methods: {
    openDialogAdress(type) {
      this.$emit('open-dialog-adress', type);
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapperSelectedAdress {
  display: flex;
  flex-wrap: wrap;
}

.label {
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: $black;
  margin: 10px 0;
}

.wrapper {
  width: 100%;
  padding: 10px;
  position: relative;
  border-radius: 12px;
  background: #f3f2f2;
  border: 1px solid #dfdede;
  min-height: 80px;

  .adressName {
    width: 50%;
    color: rgb(170, 170, 170);
    font-size: 16px;
    line-height: 1.4;
  }

  .change, .chooseAdress {
    font-size: 14px;
    color: $orange;
    cursor: pointer;
    position: absolute;
  }

  .change {
    top: 10px;
    right: 10px;
  }

  .chooseAdress {
    top: 50px;
    right: 10px;
  }
}
</style>
