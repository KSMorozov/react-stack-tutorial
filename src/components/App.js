import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <ul style={{ margin: '10px' }}>
        You like: {this.props.items.map(subject => <li key={subject}>{subject}</li>)}
      </ul>
    );
  }
}

export default App;
