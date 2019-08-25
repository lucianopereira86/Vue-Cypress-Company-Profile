import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/pages/Home.vue';
import CompanyData from './components/pages/CompanyData.vue';
import CompanyTable from './components/pages/CompanyTable.vue';
import CompanyPage from './components/pages/CompanyPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/companydata',
			name: 'COMPANY DATA',
			component: CompanyData
		},
		{
			path: '/companytable',
			name: 'COMPANY TABLE',
			component: CompanyTable
		},
		{
			path: '/companypage',
			name: 'COMPANY PAGE',
			component: CompanyPage
		}
	]
});
