import React, { Component } from "react";
import { Container, Grid, Row, Button } from "react-bootstrap";

import Nav from "./navigation.js";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div>
          <Nav />
          <h1>Home</h1>
        </div>
      </Container>
    );
  }
}

export default Main;
