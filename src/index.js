import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

const items = [ 'Javscript', 'Go' ];
ReactDOM.render(
  <App items={items} />,
  document.getElementById('app')
);
