<template>
  <div class='navbar'>
    <div class='logoWrapper'>
      <img :src='pizzaLogo' class='' alt=''>
      <div class='logoText'>
        <div class='title'>
          Pizza-Shop
        </div>
        <div class='desc'>
          Самая вкусная <span class='extra'>пицца</span> во вселенной.
        </div>
      </div>
    </div>
    <div class='mainTitle'>
      <p class='label'>
        Доставка пиццы <span class='extra'>Ташкент</span>
      </p>
      <p class='text'>
        60 минут или пицца бесплатно
        Звонок бесплатный
      </p>
    </div>
    <div class='phone'>
      <p class='text'>
        Звонок бесплатный
      </p>
      <p class='label'>
        1111
      </p>
    </div>
    <nuxt-link v-if='!userIsAuthorized' to='/auth'>
      <div class='signinbtn'>
        <p class='label'>Войти</p>
      </div>
    </nuxt-link>
    <account-btn v-else />

  </div>
</template>

<script>
import pizzaLogo from '../assets/img/pizza-logo.svg';
import AccountBtn from './AccountBtn';

export default {
  name: 'Navbar',
  components: { AccountBtn },
  data() {
    return {
      pizzaLogo,
    };
  },
  computed: {
    userIsAuthorized() {
      return Object.keys(this.$store.getters['user/getUserInfo']).length;
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: normal;
  padding: 35px 40px 35px 70px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 2px dashed #F6F6F6;
  background: #fff;
}

.extra {
  color: #fe5f1e;
}

.logoWrapper {
  display: flex;
  align-items: center;

  img {
    width: 38px;
    height: 38px;
  }

  .logoText {
    margin-left: 17px;
  }

  .title {
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: $black;

  }

  .desc {
    font-size: 16px;
    line-height: 19px;
    color: #7B7B7B;

  }
}

.mainTitle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 50px;

}

.label {
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #000000;
}

.text {
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #7B7B7B;
}

.phone {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.signinbtn {

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

  .label {
    color: #c1c1c1;
    font-weight: bold;
    font-size: 16px;

  }
}
</style>
