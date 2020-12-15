<template>
  <div class='inputField'>
    <p>{{ label }}</p>
    <div class='parentInput'>
      <input id='val' type='text' v-model='value'>
      <span class='change btn' @click='modefiedMode=true' v-if='!modefiedMode'>Изменить</span>
      <span class='save btn' @click='saveChanges' v-if='modefiedMode'>Сохранить</span>
      <span class='cancel btn' @click='modefiedMode=false' v-if='modefiedMode'> Отменить</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modefiedInput',
  props: ['infoValue', 'label', 'optionName'],
  data() {
    return {
      value: null,
      modefiedMode: false,
    };
  },
  mounted() {
    this.value = this.infoValue;
  },
  methods: {
    async saveChanges() {
      const userInfo = await this.$store.getters['user/getUserInfo'];
      if (userInfo[this.optionName] !== this.value) {
        console.log('yes');
        await this.$store.dispatch('user/updateUserInfo', {
          ...userInfo,
          [this.optionName]: this.value,
        });
      }
      this.modefiedMode = false;
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.input_field {
  display: flex;
}

p {
  font-size: 20px;
  font-weight: 600;
  color: $black;
}

.parentInput {
  position: relative;
  width: 500px;

  input {
    width: 400px;
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
    padding-right: 110px;
    margin: 10px 0;

    &:focus {
      border: 1px solid $orange;
    }
  }

  .btn {
    font-size: 18px;
    font-weight: 600;
    line-height: 40px;
    cursor: pointer;
  }

  .save {
    position: absolute;
    right: 110px;
    top: 10px;
    color: $orange;
  }

  .change {
    color: $orange;
  }
}
</style>
