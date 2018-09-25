import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import MainTable from './MainTable.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainTable />
      </div>
    )
  }
}

export default App;
