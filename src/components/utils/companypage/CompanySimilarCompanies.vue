<template>
  <div class="card-container">
    <div class="title">SIMILAR COMPANIES</div>
    <div class="no-border">
      <div class="list-item" v-for="(comp, index) in similarCompanies" :key="index">
        <div class="block">
          <img :src="getImgUrl(comp.icon)" />
        </div>
        <div class="block">
          <a href>{{comp.name}}</a>
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
    ...mapState('Company', ['similarCompanies'])
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
</style>