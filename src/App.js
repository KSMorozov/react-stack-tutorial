import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return(
      <ul style={{ margin: '10px' }}>
        You like: {this.props.subjects.map(subject => <li>{subject}</li>)}
      </ul>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App subjects={[ 'Javscript', 'Go', 'Haskell' ]} />, mountNode);
