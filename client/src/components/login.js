import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleLogin = () => {
    // Validate info with backend
  };

  handleRegister = () => {
    // Handle Registration
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Container>
          <h1>Stacker</h1>
          <form onSubmit={this.handleLogin}>
            <label>UserName</label>
            <input type="text" />
            <br></br>
            <label>Password</label>
            <input type="text" />
          </form>
          <Button>Login</Button>
          <br></br>

          <Button onClick={this.handleShow}>Register</Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <label>Username</label>
                <input type="text" />
                <br></br>
                <label>Password</label>
                <input type="text" />
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleRegister}>Create Account</Button>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </>
    );
  }
}

export default Login;
