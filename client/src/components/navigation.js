import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/main">Stacker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/main">Home</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/">Sign Out</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Navigation;
