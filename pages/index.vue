<template>
  <div class="main">
    <navbar class="navbar" />
    <Menu />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'

export default {
  components: { Menu, Navbar }
}
</script>

<style scoped lang='scss'>
@import "assets/scss/_variables.scss";

.main {
  background-color: $background;
  height: 100vh;
  padding: 45px;
}
</style>
