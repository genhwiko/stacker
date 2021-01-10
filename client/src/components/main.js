import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./nav.js";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <h1>Main</h1>
      </div>
    );
  }
}

export default Main;
