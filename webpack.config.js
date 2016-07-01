const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
	// https://webpack.github.io/docs/configuration.html
	/** Development debugging tool */
	devtool: '#source-map',

	/** Bundle's entry point(s) */
	entry: [
		'webpack-hot-middleware/client',
		'./client/js/main.js'
	],

	/** Compiler's destination options */
	output: {
		path: `${__dirname}/public`,
		filename: '[name].js',

		/** URL address of the output */
		publicPath: '/'
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	/** NormalModuleFactory's options */
	module: {
		loaders: [
			// Javascript
			{
				test: /\.js$/,
				loader: 'babel',
				include: `${__dirname}/client`,
				query: {
					presets: ['es2015', 'stage-2', 'react'],

					env: {
						development: {
							presets: ['react-hmre'],
							plugins: [
								['react-transform', {
									transforms: [{
										transform: 'react-transform-hmr',
										imports: ['react'], // or react-native
										locals: ['module'] // for Webpack HMR
									}]
								}]
							]
						}
					}
				}
			}
		]
	}
};

module.exports = config;
