import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Table from '../Table/Table';
import Form from '../Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav />
          <div className="row">
            <Table />
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;