import React from 'react';
import ReactDOM from 'react-dom';

const App = ({ subjects }) =>
  <ul>
    You Like {subjects.map(subject => <li>{subject}</li>)}
  </ul>

var mountNode = document.getElementById('app');
ReactDOM.render(<App subjects={[ 'Javscript', 'Go' ]} />, mountNode);
