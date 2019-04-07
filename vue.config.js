module.exports = {
	lintOnSave: process.env.NODE_ENV !== 'production',
	css: {
		loaderOptions: {
			sass: {
                data: '@import "@/assets/scss/base/_variables.scss";'
			}
		}
	}
};
