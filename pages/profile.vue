<template>
  <div class='main'>
    <navbar />
    <Menu class='stickyMenu' />
    <div class='profileWrapper'>
      <div class='label'>Личные данные :</div>
      <modefied-input label='Имя' class='option' :info-value='userInfo.name' optionName='name' />
      <modefied-input label='Номер телефона' class='option' optionName='phone' :info-value='userInfo.phone' />
      <div @click='logout' class='logout'>Выйти</div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import ModefiedInput from '../components/modefiedInput';
import Footer from '../components/footer';

export default {
  name: 'profile',
  components: { Footer, ModefiedInput, Menu, Navbar },
  computed: {
    userInfo() {
      return this.$store.getters['user/getUserInfo'];
    },
  },
  mounted() {
    if (!this.$store.getters['auth/getIsAuth']) {
      this.$router.push('/auth');
    } else {
      this.$store.dispatch('category/setCategory', '');
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout');
      await this.$store.dispatch('user/clearUserInfo');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";


.main {
  background-color: $background;
  height: 100%;
  padding: 45px;

  .stickyMenu {
    position: sticky;
    top: 0;
  }
}

.label {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
}

.logout {
  padding: 8px 25px;
  color: $orange;
  border-radius: 30px;
  background: #fff;
  border: 1px solid $orange;
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition-duration: 300ms;
  margin: 50px 0;

  &:hover {
    background-color: $orange;
    color: #fff;
  }
}

.profileWrapper {
  background: #fff;
  padding-left: 100px;
  padding-top: 50px;
}

.option {
  margin-top: 10px;
}

.selectAdress {
  margin-top: 10px;
}
</style>
