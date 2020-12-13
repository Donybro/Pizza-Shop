<template>
  <div class='wrapper'>
    <div
      v-for='category in menus'
      :key='category.name'
      class='category'
      :class="{'active' : category.name===selectedMenu.name}"
      @click='selectMenu(category)'
    >
      {{ category.label }}
    </div>
    <nuxt-link to='/cart'>
      <basket-button class='btn' />
    </nuxt-link>
  </div>
</template>

<script>
import BasketButton from './BasketButton';
import AccountBtn from './AccountBtn';

export default {
  name: 'Menu',
  components: { AccountBtn, BasketButton },
  data() {
    return {
      menus: [
        {
          name: 'pizzas',
          label: 'Пиццы',
        },
        {
          name: 'drinks',
          label: 'Напитки',
        },
        {
          name: 'deserts',
          label: 'Десерты',
        },
        {
          name: 'snakes',
          label: 'Закуски',
        },
        {
          name: 'about',
          label: 'О нас',
        },
        {
          name: 'contacts',
          label: 'Контакты',
        },
      ],
      selectedMenu: {},
    };
  },
  mounted() {
    this.selectedMenu = (this.menus.find((m) => m.name === this.$store.getters['category/getCategory']));
    this.$emit('selected-menu', this.selectedMenu.name);
  },
  methods: {
    selectMenu(category) {
      this.selectedMenu = { ...category };
      this.$store.dispatch('category/setCategory', category.name);
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapper {
  background: #fff;
  padding: 10px 60px;
  display: flex;

}

.btn {
  background: $orange;
  padding: 10px 30px 10px 15px;
  width: 130px;
  position: absolute;
  right: 60px;

  &:hover {
    background: #da5e00;
  }
}

.category {
  margin-right: 30px;
  padding: 8px 20px;
  letter-spacing: 0.015em;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: $orange;
  border: 2px solid $orange;
  border-radius: 30px;
  cursor: pointer;
  display: inline-block;
}

.active {
  color: #fff;
  background-color: $orange;
}

</style>
