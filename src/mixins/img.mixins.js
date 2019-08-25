export default {
	methods: {
		getImgUrl(icon) {
			var images = require.context('../images/CompanyPage/', false, /\.png$/);
			return images(`./${icon}.png`);
		}
	}
};
