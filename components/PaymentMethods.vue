<template>
  <div class='wrapper'>
    <h2 class='label'>Способы оплаты</h2>
    <div class='inputField'>
      <input v-model='model' type='radio' id='card' value='card'>
      <label for='card'>Картой в пиццерии</label>
    </div>
    <div class='inputField'>
      <input v-model='model' type='radio' id='cash' value='cash'>
      <label for='cash'>Наличными</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethods',
  data() {
    return {
      model: '',
    };
  },
};
</script>

<style scoped lang='scss'>
.wrapper {
  padding: 30px;
  background-color: #eff0f4;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  .label {
    margin-bottom: 25px;
  }

  .inputField {
    cursor: pointer;
    display: flex;
    margin-bottom: 10px;
  }

  label {
    font-size: 21px;
    cursor: pointer;
    margin-left: 10px;
    font-weight: 600;
  }
}

</style>
