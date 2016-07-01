#!/usr/bin/env node

const bunyan = require('bunyan');
const express = require('express');
const webpack = require('webpack');
const wDevMid = require('webpack-dev-middleware');
const wHotMid = require('webpack-hot-middleware');

const root = require('path').resolve(__dirname, '..');

// eslint-disable-next-line no-unused-vars
const deleteIf = require(`${__dirname}/deleteIf.js`);
const wConfig = require(`${root}/webpack.config.js`);

const app = express();
const compiler = webpack(wConfig);
const log = bunyan.createLogger({ name: 'Dev Server' });

// Inject HMR
app.use(wDevMid(compiler, {
	noInfo: true,
	publicPath: wConfig.output.publicPath
}));
app.use(wHotMid(compiler));

// Serve files
app.use(express.static(`${root}/public`));

// Start server
app.listen(3000, (err) => {
	if (err) {
		log.fatal(err);
		return;
	}

	log.info('Server running on port %s', 3000);
});
