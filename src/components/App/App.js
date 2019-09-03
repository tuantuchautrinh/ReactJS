import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <div className="container" id="main-content">
          <Home></Home>
          <hr />
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;