<template>
  <div class='formField'>
    <div class='main'>
      <input placeholder='Улица' v-model='street' type='text' class='street'>
      <input placeholder='Дом' v-model='flat' type='text' class='flat'>
    </div>
    <div class='additional'>
      <input placeholder='Квартира' v-model='apartament' type='text' class='add'>
      <input placeholder='Подъезд' v-model='entrance' type='text' class='add'>
      <input placeholder='Код двери' v-model='doorCode' type='text' class='add'>
      <input placeholder='Этаж' type='text' class='add'>
    </div>
    <input type='text' v-model='adressName' placeholder='Название адреса' class='adressname' />
    <textarea placeholder='Комментарий к адресу' v-model='description' class='textArea' />
    <button @click='setAdress' class='btn'>Подтвердить адрес</button>
  </div>
</template>

<script>
export default {
  name: 'AdressForm',
  data() {
    return {
      street: '',
      flat: '',
      apartament: '',
      entrance: '',
      doorCode: '',
      floor: '',
      adressName: '',
      description: '',
    };
  },
  methods: {
    setAdress() {
      const adress =
        `Улица : ${this.street || '---'} , Дом : ${this.flat || '---'} ,
        Квартира : ${this.apartament || '---'} , Подъезд : ${this.entrance || '---'} , Код двери : ${this.doorCode || '---'} ,
        Этаж : ${this.floor || '---'} , Название адреса : ${this.adressName || '---'} , Комментарий к адресу : ${this.description || '---'}`;
      this.$store.dispatch('delivery/setDeliveryInfo', {
        type: 'delivery',
        adress,
      });
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

input, textarea {
  height: 40px;
  background: #f3f2f2;
  display: inline-block;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 18px;
  padding-left: 10px;
  border: 1px solid #dfdede;
  font-weight: 500;
  color: $black;

  &:focus {
    border: 1px solid $orange;
  }
}

.main {
  display: flex;
  margin-bottom: 20px;

  .street {
    width: 80%;
  }

  .flat {
    margin-left: 2%;
  }
}

.additional {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .add {
    width: 24%;
  }

}

.adressname {
  width: 100%;
  margin-bottom: 20px;
}

.textArea {
  padding-top: 10px;
  width: 100%;
  height: 100px;
  outline: none;
  resize: none;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 22px;
  color: #fff;
  background-color: $orange;
  border-radius: 30px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
