<template>
  <div class="mainWrapper">
    <div
      v-for="option in options"
      :key="option.label"
      class="wrapper"
      :class="{'active':option.label === option_model}"
    >
      <input
        :id="option.label"
        v-model="option_model"
        :value="option.label"
        name="type"
        type="radio"
        class="radio"
      >
      <label class="radioLabel" :for="option.label">{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionGroup',
  props: ['options', 'optionType'],
  data () {
    return {
      option_model: ''
    }
  },
  watch: {
    option_model: {
      immediate: true,
      handler (val) {
        this.$emit('selectedOption', { [this.optionType]: this.option_model })
      }
    }
  },
  mounted () {
    this.option_model = this.options[0].label
  }
}
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.mainWrapper {
  background-color: #edeef2;
  display: inline-block;
  padding: 3px;
  border-radius: 20px;
  user-select: none;
  overflow: hidden;
  transition: color 150ms ease 300ms;

}

.wrapper {
  display: inline-block;
  background: transparent;
  border: 3px solid transparent;

}

.radioLabel {
  cursor: pointer;
  padding: 0 26px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.015em;
  color: #2C2C2C;
}

.active {
  border: 3px solid transparent;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.radio {
  display: none;
}
</style>
