import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
  render() {
    return (
      <ul className="products">
        {this.props.products.map(product =>
          <li key={product.name} className="product">
            <Product
              description={product.description}
              name={product.name}
              img={product.imagePath}
            />
          </li>
        )}
      </ul>
    );
  }
}

export default ProductsList;
