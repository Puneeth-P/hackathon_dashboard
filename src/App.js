import React, { Component } from 'react';
import Home from "./Home";
import Ad from "./Ad";
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/ad/:id" component={Ad} />
            </div>
        </BrowserRouter >
    );
  }
}

export default App;
