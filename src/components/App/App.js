import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../Product/Product';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
