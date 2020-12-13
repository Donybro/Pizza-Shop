<template>
  <div class='main'>
    <form class='form' @submit.prevent='handler'>
      <div class='welcome'>Сначала нужно войти в профиль</div>
      <div class='input_field'>
        <label for='email'>Email</label>
        <input
          v-model='email'
          type='email'
          id='email'
          placeholder='Введите ваш email'
          :class='{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email)
          }'
        >
        <small
          v-if='$v.email.$dirty && !$v.email.email'
          class='helper-text'
        >Введенный email некорректен</small>
        <small
          v-if='$v.email.$dirty && !$v.email.required'
          class='helper-text'
        >Пожалуста введите email</small>
      </div>
      <div class='input_field'>
        <label for='password'>Пароль</label>
        <input v-model='password' type='password' id='password' placeholder='Введите ваш пароль' :class='{
              invalid:
                ($v.email.$dirty && !$v.password.required) ||
                ($v.email.$dirty && !$v.password.minLength)
            }'>
        <small
          class='helper-text invalid'
          v-if='$v.password.$dirty && !$v.password.required'
        >Введите свой пароль</small
        >
        <small
          class='helper-text invalid'
          v-if='$v.password.$dirty && !$v.password.minLength'
        >{{ `Пароль должен быть длиннее чем ${$v.password.$params.minLength.min} символов` }}</small
        >
      </div>
      <button type='submit' class='btn' :class='{"disabled":disabled}'>Войти</button>
      <p class='haventAcc'>Еще нет аккаунта?
        <nuxt-link to='/registration'>
          <span class='regbtn'>Зарегестрироваться</span>
        </nuxt-link>
      </p>
    </form>
  </div>
</template>

<script>
import { email, minLength, required } from 'vuelidate/lib/validators';

export default {
  name: 'auth',
  data() {
    return {
      email: '',
      password: '',
      disabled: false,
    };
  },
  validations: {
    password: { required, minLength: minLength(6) },
    email: { email, required },
  },
  methods: {
    async handler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return null;
      }
      this.disabled = true;
      const result = await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      });
      if (result) {
        this.$router.push('/');
      } else {
        this.disabled = false;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/img/pizzza.jpg");
  -webkit-background-size: 200px 200px;
  background-size: 200px 200px;
}

.input_field {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form {
  background: #fff;
  border-radius: 16px;
  padding: 40px;
  width: 600px;
  display: flex;
  flex-direction: column;

  label {
    margin: 10px 0;
    font-weight: 600;
    color: $black
  }

  input {
    width: 100%;
    height: 40px;
    background: #ffffff;
    display: inline-block;
    border-radius: 4px;
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

  .btn {
    margin: 30px auto;
    padding: 10px 50px;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border-radius: 30px;
    background-color: $orange;
    border: 1px solid $orange;
    font-weight: 600;
    color: #fff
  }

  .regbtn {
    text-decoration: underline;
    color: $orange;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 10px;
  }

  .disabled {
    background-color: #ae9884;
    border: 1px solid transparent;
    cursor: not-allowed;
  }

  .welcome {
    font-size: 22px;
    font-weight: 600;
    color: $orange;
    text-align: center;
    margin-bottom: 40px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
}

.haventAcc {
  margin: 0 auto;
}

.helper-text {
  margin-top: 5px;
  color: #df3737;
}

</style>
