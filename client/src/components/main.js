import React, { Component } from "react";
import { Container, Grid, Row, Button } from "react-bootstrap";

import Nav from "./navigation.js";

const Main = () => {
  return (
    <Container>
      <div>
        <Nav />
        <h1>Home</h1>
      </div>
    </Container>
  );
};

export default Main;
