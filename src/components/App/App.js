import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Pane from '../Pane/Pane';
import Lower from '../Lower/Lower';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <Menu />
        <Pane />
        <div className="clear" />
        <Lower />
        <div className="clear" />
        <Footer />
      </div>
    );
  }
}

export default App;
