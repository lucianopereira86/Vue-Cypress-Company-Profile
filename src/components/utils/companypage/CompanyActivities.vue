<template>
  <div class="card-container">
    <div class="title">ACTIVITIES</div>
    <div class="list-item" v-for="(act, index) in activities" :key="index">
      <div class="block days">
        <span>{{act.days}} days ago</span>
      </div>
      <div class="block icon">
        <img :src="getImgUrl(act.icon)" />
      </div>
      <div class="block msg">
        <span v-html="getMsg(act)"></span>
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
    ...mapState('Company', ['activities'])
  },
  methods: {
    getMsg (act) {
      let anchor = `<a href="" style="text-decoration: none !important">`
      let replaced = 'replaced <strike style="color:#A6A6A6">Microsoft</strike> on';
      if (act.prop) {
        let prop = act.prop > 1 ? 'properties' : 'property'
        let msg = `${anchor}${act.company}</a> ${replaced} ${anchor}${act.prop} ${prop}</a>`
        return msg
      }
      else return act.msg
    }
  }
}
</script>

<style scoped>
.list-item {
  /* border-top: 0.5px solid #d4d9e3;
  border-bottom: 0.5px solid #d4d9e3; */
  /* width: 92%; */
  padding: 21px 20px;
  text-align: left;
}
.days {
  color: #a0a0a0;
  font-size: 14px;
  font-weight: bold;
  width: 25%;
}
.icon {
  width: 8%;
  text-align: center;
}
.msg {
  width: 64%;
}
</style>