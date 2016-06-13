module.exports = {
	get hello() {
		return require('./libs/hello');
	},
	get LoadMoreRefreshView() {
		return require('./libs/LoadMoreRefreshView');
	}
};