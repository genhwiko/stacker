import React, { useState } from "react";
import { AppBar, Typography, Grow, Grid } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import memories from "./images/memories.png";
function App() {
  const [show, setShow] = useState(false);

  const handleLogin = () => {
    // Validate info with backend
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
    <div className="App">
      <Container>
        <h1>Stacker</h1>
        <form onSubmit={handleLogin}>
          <label>UserName</label>
          <input type="text" />
          <br></br>
          <label>Password</label>
          <input type="text" />
        </form>
        <Button>Login</Button>
        <br></br>

        <Button onClick={handleShow}>Register</Button>
        <Modal show={show} onHide={handleClose}>
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
            <Button onClick={handleRegister}>Create Account</Button>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
    // <Container maxidth="lg">
    //   <AppBar position="static" color="inherit">
    //     <Typography variant="h2" align="center">Memories</Typography>
    //     <img src={memories} alt="memories" height="600" />
    //   </AppBar>
    //   <Grow in>
    //     <Container>
    //       <Grid container justify="space-between" alignItems="stretch" spacing={3}>
    //         <Grid item xs={12} sm={7}>
    //           <Posts />
    //         </Grid>
    //         <Grid item xs={12} sm={4}>
    //           <Form />
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container>
  );
}

export default App;
