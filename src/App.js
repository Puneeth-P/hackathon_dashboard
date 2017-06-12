import React, { Component } from 'react';
import logo from './exp.png';
import './css/App.css';
import './css/react-bootstrap-table-all.min.css';
import './css/react-bootstrap-table.min.css';
import BootStrapTable  from './BootStrapTable';


class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>EXPEDIA AD SENSE</h2>
        </div>

            <BootStrapTable/>
      </div>
    );
  }
}

export default App;
