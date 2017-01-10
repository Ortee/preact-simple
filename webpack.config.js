var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	output: {
		path: './build',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
			}
		]
	},
	plugins: [
    new DashboardPlugin({ port: 8080 }),
		new ExtractTextPlugin('style.css', { allChunks: true }),
	],
	devtool: 'source-map',
	devServer: {
		port: process.env.PORT || 8080,
		contentBase: './src'
	}
};
