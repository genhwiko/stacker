import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Account from "./account.js";
import Nav from "./nav.js";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <h1>test</h1>
          <Nav />
          <Route path="/account" exact component={Account} />
        </div>
      </Router>
    );
  }
}

export default Main;
