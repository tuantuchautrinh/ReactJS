import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Table from '../Table/Table';
import Form from '../Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusForm : false
    };
  }

  showForm = () => {
    if(this.state.statusForm) {
      return <Form />
    }
  }

  changeStatusForm = (event) => {
    event.preventDefault();
    this.setState({
      statusForm : true
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav />
          <div className="row">
            <Table formToogle={ (event) => this.changeStatusForm(event) } />
            { this.showForm() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;