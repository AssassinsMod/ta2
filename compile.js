#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const pug = require('pug');

const args = process.argv.slice(2);

if (!args[0]) {
	throw new Error('File must be specified!');
}

const origin = path.resolve(args[0]);
const outdir = args[1] ? path.resolve(args[1]) : path.dirname(origin);

fs.writeFileSync(
	`${outdir}/${path.basename(origin)}`
		.replace(`${path.extname(origin)}`, '.html'),
	pug.renderFile(
		origin,
		args[2] ? JSON.parse(args[2]) : {}
	)
);
