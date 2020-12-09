<template>
  <div class="wrapper">
    <div class="content">
      <div
        v-for="category in categories"
        :key="category.name"
        class="category"
        :class="{'active' : category.name === selectedCategory.name}"
        @click="selectCategory(category)"
      >
        {{ category.label }}
      </div>
      <basket-button class="btnBasket" />
    </div>
  </div>
</template>

<script>

import BasketButton from './BasketButton'

export default {
  name: 'Categories',
  components: { BasketButton },
  data () {
    return {
      categories: [
        {
          name: 'all',
          label: 'All'
        },
        {
          name: 'meat',
          label: 'Meat'
        },
        {
          name: 'vegetarian',
          label: 'Vegetarian'
        },
        {
          name: 'spicy',
          label: 'Spicy'
        }
      ],
      selectedCategory: {}
    }
  },
  mounted () {
    this.selectedCategory = this.categories[0]
  },
  methods: {
    selectCategory (category) {
      this.selectedCategory = { ...category }
    }
  }
}
</script>

<style scoped lang='scss'>

@import "assets/scss/variables";

.wrapper {
  background: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
}

.content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}



.category {
  margin-right: 30px;
  padding: 10px 20px;
  letter-spacing: 0.015em;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: $black;
  border: 2px solid $black;
  border-radius: 30px;
  cursor: pointer;

  &:first-child {
    margin-left: 60px;
  }
}

.active {
  color: #fff;
  background-color: $black;
}
</style>
