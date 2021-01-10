import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      loggedIn: false,
    };
  }

  handleLogin = () => {
    this.props.history.push("/main.js");
    // document.getElementById("login").style.display = "none";
    // this.setState({ loggedIn: true });
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

  loginToMain = () => {
    if (this.state.loggedIn === true) {
    }
  };

  render() {
    return (
      <>
        <div id="login">
          <Container>
            <h1>Stacker</h1>
            <form onSubmit={this.handleLogin}>
              <label>UserName</label>
              <input type="text" />
              <br></br>
              <label>Password</label>
              <input type="text" />
              <br></br>
              <Button onClick={this.handleLogin}>Login</Button>
            </form>

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
        </div>
        {this.loginToMain()}
      </>
    );
  }
}

export default withRouter(Login);
