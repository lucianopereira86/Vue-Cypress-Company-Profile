import Vue from 'vue';
import Vuex from 'vuex';
import Company from './store/company';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		Company
	}
});
