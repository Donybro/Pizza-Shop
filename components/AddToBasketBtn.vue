<template>
  <div class='wrapper'>
    Добавить в корзину за {{ price }} сум
  </div>
</template>

<script>
export default {
  name: 'AddToBasketBtn',
  props: ['price'],
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapper {
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background: $orange;
  display: inline-block;
  border-radius: 30px;
  cursor: pointer;
  transition-duration: 200ms;
  user-select: none;

  &:active {
    transition-duration: 200ms;
    background: #d65c26;
    color: #eae8e8;
  }
}
</style>
