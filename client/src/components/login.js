import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

import { getUsers } from "../actions/users.js";
import Form from "./Form/Form.js";

const Login = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    users.map((user) => {
      if (user.username === username && user.password === password) {
        history.push("/main");
      } else {
        document.getElementById("incorrectLogin").innerHTML =
          "<h5 >Username or Password Incorrect</h5>";
      }
    });
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
        <form onSubmit={handleLogin}>
          <div id="incorrectLogin"></div>
          <label>UserName</label>
          <input id="username" required={true} type="text" />
          <br></br>
          <label>Password</label>
          <input id="password" required={true} type="password" />
          <br></br>
          <Button type="submit">Login</Button>
        </form>

        <Button onClick={handleShow}>Register</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Form />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default withRouter(Login);
