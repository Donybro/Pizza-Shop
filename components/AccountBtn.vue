<template>
  <div class="wrapper">
    <p class="label">
      Войти
    </p>
  </div>
</template>

<script>
export default {
  name: 'AccountBtn'
}
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapper {
  border-radius: 30px;
  padding: 15px 25px;
  background-color: $gray-line;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;

  &:hover {
    transition-duration: 300ms;
    background-color: #fff;
    border: 1px solid #fe5f1e;

    .label {
      color: $black;
    }
  }

  &:active {
    padding: 17px 27px;
  }
}

.label {
  color: #c1c1c1;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

}
</style>
