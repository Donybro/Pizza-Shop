<template>
  <div class='main'>
    <form class='form' @submit.prevent='handler'>
      <div class='welcome'>Добро пожаловать в Pizza-shop</div>
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
        <input
          v-model='password'
          type='password'
          id='password'
          placeholder='Введите ваш пароль'
          :class='{
              invalid:
                ($v.email.$dirty && !$v.password.required) ||
                ($v.email.$dirty && !$v.password.minLength)
            }'
        >
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
      <div class='input_field'>
        <label for='name'>Имя</label>
        <input
          v-model='name'
          type='text'
          id='name'
          placeholder='Введите ваше имя'
          :class='{
              invalid:
                ($v.name.$dirty && !$v.name.required) ||
                ($v.name.$dirty && !$v.name.minLength)
            }'
        >
        <small
          v-if='$v.name.$dirty && !$v.name.required'
          class='helper-text invalid'
        >Имя обязательно для ввода</small
        >
        <small
          v-else-if='$v.name.$dirty && !$v.name.minLength'
          class='helper-text invalid'
        >Длинна имени должена быть более 1 символа </small
        >
      </div>
      <div class='input_field'>
        <label for='phone'>Номер телефона</label>
        <input
          v-model='phone'
          type='number'
          id='phone'
          placeholder='Введите ваш номер телефона'
          :class='{
              invalid:
                ($v.name.$dirty && !$v.phone.required)
            }'
        >
        <small
          v-if='$v.name.$dirty && !$v.phone.required'
          class='helper-text invalid'
        >Номер телефона обязателен для ввода</small
        >
      </div>
      <button :disabled='disabled' type='submit' class='btn' :class='{"disabled":disabled}'>Зарегесрироваться</button>
    </form>
  </div>
</template>

<script>
import { email, minLength, required } from 'vuelidate/lib/validators';

export default {
  name: 'registration',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      phone: null,
      disabled: false,
    };
  },
  async mounted() {
  },
  validations: {
    password: { required, minLength: minLength(6) },
    email: { email, required },
    name: { required, minLength: minLength(1) },
    phone: { required },
  },
  methods: {
    async handler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return null;
      }
      this.disabled = true;
      const result = await this.$store.dispatch('auth/registration', {
        email: this.email,
        password: this.password,
        name: this.name,
        phone: this.phone,
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
  padding: 30px;
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

.helper-text {
  margin-top: 5px;
  color: #df3737;
}

.haventAcc {
  margin: 0 auto;
}

</style>
