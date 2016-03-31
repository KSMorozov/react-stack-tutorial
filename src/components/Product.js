import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { name, img, description } = this.props;
    return (
      <div className="card">
        <h2 className="title">{name}</h2>
        <img className="iamge" src={img} />
        <p className="desc">{description}</p>
      </div>
    );
  }
}

export default Product;
