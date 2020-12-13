<template>
  <nuxt-link to='profile'>
    <div class='wrapper'>
      <p class='label'>
        {{ userInfo.name }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AccountBtn',
  computed: {
    userInfo() {
      return this.$store.getters['user/getUserInfo'];
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapper {
  border-radius: 30px;
  padding: 10px 20px;
  background-color: $gray-line;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  display: inline-block;

  &:hover {
    transition-duration: 300ms;
    background-color: #fff;
    border: 1px solid #fe5f1e;

    .label {
      color: $black;
    }
  }
}

.label {
  color: #c1c1c1;
  font-weight: bold;
  font-size: 16px;

}
</style>
