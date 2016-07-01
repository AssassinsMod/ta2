window.debug = require('debug');
const debug = window.debug('React');
window.debug.enable('*');


import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';


window.onload = () => {
	debug('Rendering');

	ReactDOM.render(
		<App />,
		document.getElementById('main')
	);
};
