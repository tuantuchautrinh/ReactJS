import React from 'react';
import './App.css';
import Product from '../Product/Product';
import Modal from '../Modal/Modal';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Product price="1000000" images="/images/products/p1.png" hot={true}>Laptop Asus</Product>
        <Product price="4000000" images="/images/products/p2.png" hot={true}>Điện thoại Asus</Product>
        <Product price="5500000" images="/images/products/p3.png" hot={true}>iPhone X</Product>
        <Product price="2500000" images="/images/products/p4.png" hot={true}>Macbook</Product>
        <Product price="9600000" images="/images/products/p5.png" hot={true}>Laptop HP</Product>
        <Product price="2600000" images="/images/products/p6.png" hot={true}>Laptop Lenovo</Product>
      </div>

      <Modal />
    </div>
  );
}

export default App;
