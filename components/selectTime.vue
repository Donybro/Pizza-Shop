<template>
  <div class='selectTimeWrapper'>
    <div class='label'>Приготовить</div>
    <div class='popup' @click.stop='popupIsOpen=true'>
      <div>{{ getDeliveryTime || 'Побыстрее' }}</div>
      <div v-show='popupIsOpen' class='list'>
        <div @click='handler' class='time'>8:45</div>
        <div @click='handler' class='time'>9:00</div>
        <div @click='handler' class='time'>9:15</div>
        <div @click='handler' class='time'>9:30</div>
        <div @click='handler' class='time'>9:45</div>
        <div @click='handler' class='time'>10:00</div>
        <div @click='handler' class='time'>10:15</div>
        <div @click='handler' class='time'>10:30</div>
        <div @click='handler' class='time'>10:45</div>
        <div @click='handler' class='time'>11:00</div>
        <div @click='handler' class='time'>11:15</div>
        <div @click='handler' class='time'>11:30</div>
        <div @click='handler' class='time'>11:45</div>
        <div @click='handler' class='time'>12:00</div>
        <div @click='handler' class='time'>12:15</div>
        <div @click='handler' class='time'>12:30</div>
        <div @click='handler' class='time'>12:45</div>
        <div @click='handler' class='time'>13:00</div>
        <div @click='handler' class='time'>13:15</div>
        <div @click='handler' class='time'>13:30</div>
        <div @click='handler' class='time'>13:45</div>
        <div @click='handler' class='time'>14:00</div>
        <div @click='handler' class='time'>14:15</div>
        <div @click='handler' class='time'>14:30</div>
        <div @click='handler' class='time'>14:45</div>
        <div @click='handler' class='time'>15:00</div>
        <div @click='handler' class='time'>15:15</div>
        <div @click='handler' class='time'>15:30</div>
        <div @click='handler' class='time'>15:45</div>
        <div @click='handler' class='time'>16:00</div>
        <div @click='handler' class='time'>16:15</div>
        <div @click='handler' class='time'>16:30</div>
        <div @click='handler' class='time'>16:45</div>
        <div @click='handler' class='time'>17:00</div>
        <div @click='handler' class='time'>17:15</div>
        <div @click='handler' class='time'>17:30</div>
        <div @click='handler' class='time'>17:45</div>
        <div @click='handler' class='time'>18:00</div>
        <div @click='handler' class='time'>18:15</div>
        <div @click='handler' class='time'>18:30</div>
        <div @click='handler' class='time'>18:45</div>
        <div @click='handler' class='time'>19:00</div>
        <div @click='handler' class='time'>19:15</div>
        <div @click='handler' class='time'>19:30</div>
        <div @click='handler' class='time'>19:45</div>
        <div @click='handler' class='time'>20:00</div>
        <div @click='handler' class='time'>20:15</div>
        <div @click='handler' class='time'>20:30</div>
        <div @click='handler' class='time'>20:45</div>
        <div @click='handler' class='time'>21:00</div>
        <div @click='handler' class='time'>21:15</div>
        <div @click='handler' class='time'>21:30</div>
        <div @click='handler' class='time'>21:45</div>
        <div @click='handler' class='time'>22:00</div>
        <div @click='handler' class='time'>22:15</div>
        <div @click='handler' class='time'>22:30</div>
        <div @click='handler' class='time'>22:45</div>
        <div @click='handler' class='time'>23:00</div>
        <div @click='handler' class='time'>23:15</div>
        <div @click='handler' class='time'>23:30</div>
        <div @click='handler' class='time'>23:45</div>
      </div>
      <img :src='arrowDown' class='arrow' alt='arrow'>
    </div>
  </div>
</template>

<script>
import arrowDown from '../assets/img/keyboard_arrow_down-black-18dp.svg';

export default {
  name: 'selectTime',
  data() {
    return {
      arrowDown,
      popupIsOpen: false,
    };
  },
  computed: {
    getDeliveryTime() {
      return this.$store.getters['delivery/getDeliveryInfo'].deliveryTime;
    },
  },
  mounted() {
    window.addEventListener('click', this.closeDropDown);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.closeDropDown);
  },
  methods: {
    closeDropDown() {
      this.popupIsOpen = false;
    },
    handler(e) {
      this.$store.dispatch('delivery/setDeliveryInfo', {
        deliveryTime: e.target.innerText,
      });
    },
  },
};
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.selectTimeWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 20px;
    font-weight: 600;
    color: $black;
  }

  .popup {
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(115, 121, 140, 0.32);
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    padding: 10px 22px;
    color: rgb(69, 75, 84);
    font-size: 16px;
    position: relative;
    font-weight: 600;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    &:hover {
      cursor: pointer;
      border-color: rgb(255, 105, 0);
      color: rgb(255, 105, 0);

      .arrow {
        filter: invert(46%) sepia(30%) saturate(5389%) hue-rotate(2deg) brightness(103%) contrast(108%);
      }
    }

    .arrow {
      filter: invert(27%) sepia(19%) saturate(331%) hue-rotate(177deg) brightness(94%) contrast(88%);
      width: 22px;

    }
  }


  .list {
    border: 4px solid #ccc;
    border-radius: 8px;
    position: absolute;
    top: -2px;
    right: -2px;
    background-color: #fff;
    height: 200px;
    width: calc(100% + 4px);
    overflow-y: scroll;
    z-index: 300;
    scrollbar-width: thin;


    &:hover {
      color: rgb(69, 75, 84);
    }

    .time {
      padding: 8px 15px 6px;

      &:hover {
        background-color: #ccc;
      }
    }
  }
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #ededed;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 8px;

}
</style>
