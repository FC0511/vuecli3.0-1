const path = require('path');
const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/home' : '/';


module.exports = {
  lintOnSave: false,
  baneUrl: BASE_URL,
	chainWebpack: config => {
  	// 路径别名
  	config.resolve.alias.set('@', resolve('src'));
  	config.resolve.alias.set('_c', resolve('src/components'));
	},
	// 打包不生产.map文件
	productionSourceMap: false,
	devServer: {
  	proxy: 'http://localhost:4000' // 将未知请求（没有匹配到静态资源的请求）都代理到这个url
	}
};
