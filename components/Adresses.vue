<template>
  <div class='wrapper'>
    <div class='adressWrapper' v-for='adress in adresses' :key='adress.name'>
      <div class='radio'>
        <input class='radio' v-model='model' :value='adress.adress' type='radio' :id='adress.id'>
        <label class='radio' :for='adress.id'>{{ adress.name }}</label>
      </div>
      <p>{{ adress.adress }}</p>
      <p>{{ adress.period }}</p>
      <div v-if='adress.subwayStation' class='subway'>
        <svg width='20' height='17' viewBox='0 0 20 15'>
          <path fill='#EB1D00' fill-rule='evenodd'
                d='M13.399.056h-.158L9.88 6.54 6.401 0 1.638 11.816H.406v.949H7.15v-.95H5.813L7.15 8.124l2.73 4.642 2.624-4.642 1.338 3.693h-1.338v.949h6.691v-.95h-1.159z'></path>
        </svg>
        <span>  {{ adress.subwayStation }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Adresses',
  data() {
    return {
      adresses: [{
        id: '1',
        name: 'Буюк Ипак Йули',
        adress: 'ул. Буюк Ипак Йули, 123',
        period: '9:00 — 23:00',
        subwayStation: '',
      }, {
        id: '2',
        name: 'Новомосковская',
        adress: 'ул. Кары-Ниязи, 61',
        period: '9:00 — 0:00',
        subwayStation: '',
      }, {
        id: '3',
        name: 'Саид Барака',
        adress: 'ул. Саида Барака, 16б',
        period: 'Круглосуточно',
        subwayStation: 'Ойбек',
      }],
      model: '',
    };
  },
  watch: {
    model: {
      handler(adress) {
        this.$store.dispatch('delivery/setDeliveryInfo', {
          type: 'pickup',
          adress,
        });
      },
    },
  },
};
</script>

<style scoped lang='scss'>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    margin-left: 18px;
    margin-top: 10px;
    color: rgb(69, 75, 84);
    font-size: 15px;
  }

  label {
    font-size: 16px;
    font-weight: 600;
  }

  .adressWrapper {
    display: flex;
    flex-direction: column;
    width: 250px;
    margin-bottom: 40px;
  }

  .subway {
    display: flex;
    align-items: center;
    padding-left: 17px;
    margin-top: 10px;
  }
}

.radio {
  cursor: pointer;
}
</style>
