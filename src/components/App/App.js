import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Table from '../Table/Table';
import Form from '../Form/Form';
import myData from '../Table/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusForm : false,
      usersData : myData
    };
  }

  showForm = () => {
    if(this.state.statusForm) {
      return <Form formToogle={ (event) => this.changeStatusForm(event) } add={ (item) => this.addAction(item) } />
    }
  }

  changeStatusForm = (event) => {
    event.preventDefault();
    this.setState({
      statusForm : !this.state.statusForm
    });
  }

  addAction = (item) => {
    this.state.usersData.push(item);
    this.setState({
      usersData : this.state.usersData
    });
  }

  render() {
    console.log(this.state.usersData);

    return (
      <div className="App">
        <div className="container">
          <Nav />
          <div className="row">
            <Table usersData={ this.state.usersData } statusForm={ this.state.statusForm } formToogle={ (event) => this.changeStatusForm(event) } />
            { this.showForm() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;