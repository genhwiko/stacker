import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

import { getUsers } from "../actions/users.js";
import Form from "./Form/Form.js";

const Login = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleLogin = () => {
    // Validate info with backend
    history.push("/main");
  };

  const handleRegister = () => {
    // Handle Registration
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div id="login">
      <Container>
        <h1>Stacker</h1>
        <form>
          <label>UserName</label>
          <input type="text" />
          <br></br>
          <label>Password</label>
          <input type="text" />
          <br></br>
          <Button onClick={handleLogin}>Login</Button>
        </form>

        <Button onClick={handleShow}>Register</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleRegister}>Create Account</Button>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default withRouter(Login);
