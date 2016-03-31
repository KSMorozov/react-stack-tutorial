import React, { Component } from 'react';
import ProductsList from './ProductsList';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <h1>Products Rating & description:</h1>
        <ProductsList products={this.props.products} />
      </div>
    );
  }
}

export default App;
