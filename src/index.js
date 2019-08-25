import 'Styles/main.scss';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import router from './router.js';
import store from './store.js';
import App from './App.vue';
import VueTheMask from 'vue-the-mask';
import VueApexCharts from 'vue-apexcharts';

Vue.use(Vuelidate);
Vue.use(VueTheMask);
Vue.component('apexchart', VueApexCharts);

new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
});
