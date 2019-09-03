import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Contact from '../Contact/Contact';
import RouterURL from '../RouterURL/RouterURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav></Nav>
          <div className="container" id="main-content">
            <RouterURL />
            <hr />
            <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;