import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login.js";

function App() {
  return (
    <div className="App">
      <Login />
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
