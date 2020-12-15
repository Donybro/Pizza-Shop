<template>
  <div v-if='isDialogOpen' class='productDialog' @click.stop='closeDialog'>
    <slot @click.stop></slot>
  </div>
</template>

<script>
import OptionGroup from './OptionGroup';
import AdditionalProduct from './AdditionalProduct';
import AddToBasketBtn from './AddToBasketBtn';

export default {
  name: 'DialogMenu',
  components: { AddToBasketBtn, AdditionalProduct, OptionGroup },
  props: ['isDialogOpen'],
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/_variables.scss";

.productDialog {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, .4);
}


</style>
