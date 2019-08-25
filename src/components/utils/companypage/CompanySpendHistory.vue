<template>
  <div class="card-container">
    <div class="title">COMPANY SPEND HISTORY</div>
    <div class="no-border">
      <div class="list-item" v-for="(spend, index) in spendHistory" :key="index">
        <div class="block">
          <img :src="getImgUrl(spend.icon)" />
        </div>
        <div class="block">
          <a href>{{spend.name}}</a>,
          <div class="value">Microsoft spend on product ${{getValue(spend.value)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import imgMixins from '../../../mixins/img.mixins'
export default {
  mixins: [imgMixins],
  computed: {
    ...mapState('Company', ['spendHistory'])
  },
  methods: {
    getValue (value) {
      return value > 1000 ? this.numberWithCommas(value) : value
    },
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>

<style scoped>
.list-item {
  /* width: 92%; */
  padding: 5px 20px;
  text-align: left;
}
a,
u {
  text-decoration: none !important;
}
.value {
  color: #636363;
}
</style>