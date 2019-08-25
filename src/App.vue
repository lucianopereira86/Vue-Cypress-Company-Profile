<template>
  <div id="app" :style="getStyle()">
    <nav>
      <h1>NAV BAR</h1>
    </nav>
    <div id="side-menu-container">
      <div id="side-menu">
        <div id="title-route" v-html="getRouteName()"></div>
        <div class="card-container">
          <div
            v-for="route in $router.options.routes"
            :key="route.path"
            :class="getClass(route)"
            @click="goto(route)"
          >
            <span>{{route.name}}</span>
          </div>
        </div>
      </div>
      <div id="router-view">
        <router-view />
      </div>
    </div>
    <footer>
      <h2>FOOTER</h2>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    getStyle () {
      return this.$route.path === '/companypage' ? { backgroundColor: '#e7e9f3' } : {}
    },
    getClass (route) {
      return this.$route.path === route.path ? 'selected' : 'unselected'
    },
    goto (route) {
      this.$router.push(route.path)
    },
    getRouteName () {
      return this.$route.name ? `HOME &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; ${this.$route.name}` : 'HOME'
    }
  }
}
</script>

<style>
body {
  margin: 0 auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  top: 0;
}
footer {
  bottom: 0;
}
nav,
footer {
  position: fixed;
  width: 100%;
  background: #344279;
  color: white;
  text-align: center;
  left: 0;
  z-index: 1;
}
nav h1,
footer h2 {
  margin: 0;
}
#side-menu-container {
  position: relative;
  padding-top: 5vh;
  height: 92vh;
  overflow-y: auto;
}
#side-menu {
  position: absolute;
  left: 5%;
}
#title-route {
  margin-bottom: 3vh;
  color: #646465;
  font-size: 14px;
}
#router-view {
  position: absolute;
  left: 30%;
  right: 6%;
  top: 10vh;
  margin-bottom: 5vh;
}
.card-container {
  border: 1px solid #d4d9e3;
  border-radius: 5px;
  background-color: white;
  padding-right: 1px;
}
.card-container > div:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top: 0.5px solid #d4d9e3;
  border-bottom: 0.5px solid #d4d9e3;
}
.card-container > div:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.card-container > div:not(:first-child) {
  border-bottom: 0.5px solid #d4d9e3;
}
.selected,
.unselected {
  width: 15vw;
  padding: 21px 30px;
  text-align: left;
  cursor: pointer;
  font-size: 13px;
  /* margin: -0.5px; */
}
.unselected {
  background-color: white;
  color: #4d5783;
}
.selected {
  border-left: 3px solid #2d3968;
  background-color: #fafbfc;
  color: #525252;
  padding-left: 27px !important;
}
.inline-block {
  display: inline-block !important;
}
.no-border > div {
  border: 0px !important;
}
</style>
