<template>
  <div class="wrapper">
    <div
      v-for="category in menus"
      :key="category.name"
      class="category"
      :class="{'active' : category.name===selectedMenu.name}"
      @click="selectMenu(category)"
    >
      {{ category.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      menus: [
        {
          name: 'pizza',
          label: 'Pizza'
        },
        {
          name: 'drinks',
          label: 'Drinks'
        },
        {
          name: 'dessert',
          label: 'Dessert'
        },
        {
          name: 'about',
          label: 'About'
        },
        {
          name: 'contacts',
          label: 'Contacts'
        }
      ],
      selectedMenu: {}
    }
  },
  mounted () {
    this.selectedMenu = this.menus[0]
  },
  methods: {
    selectMenu (category) {
      this.selectedMenu = { ...category }
    }
  }
}
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.wrapper {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 60px;
}

.category {
  margin-right: 30px;
  padding: 8px 20px;
  letter-spacing: 0.015em;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: $orange;
  border: 2px solid $orange;
  border-radius: 30px;
  cursor: pointer;
}

.active {
  color: #fff;
  background-color: $orange;
}
</style>
