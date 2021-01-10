import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/boostrap.min.css";

import Nav from "./nav.js";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/account" exact component={Account} />
        </div>
      </Router>
    );
  }
}

export default Main;
