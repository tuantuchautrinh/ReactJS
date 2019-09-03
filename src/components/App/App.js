import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Contact from '../Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <div className="container" id="main-content">
          <Contact></Contact>
          <hr />
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;