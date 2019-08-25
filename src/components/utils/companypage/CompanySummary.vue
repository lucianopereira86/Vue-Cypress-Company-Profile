<template>
  <div>
    <!-- IMAGE AND TITLE -->
    <div>
      <div class="card-img block">
        <img src="../../../images/CompanyPage/squares.png" />
      </div>
      <div class="block">
        <h1>Microsoft</h1>
        <div style="margin-top:5px">
          <img src="../../../images/CompanyPage/location.png" class="block" />
          <span class="location block">Redmond, WA USA</span>
        </div>
      </div>
    </div>
    <div v-html="getText()" style="margin-top:20px"></div>
  </div>
</template>

<script>
export default {
  methods: {
    getText () {
      return 'At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.&nbsp;Our mission is grounded in both the world in which we live and the future we strive to create. <a href="">View More...</a> '
    }
  }
}
</script>

<style scoped>
.card-img {
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 2px 2px #ccc;
  margin-right: 15px;
  background-color: white;
}
.location {
  color: #999999;
  font-size: 13px;
  margin-left: 8px;
}
h1 {
  margin: 0 auto !important;
}
</style>