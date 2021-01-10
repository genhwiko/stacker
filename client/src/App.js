import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/login.js";
import Main from "./components/main.js";
import Account from "./components/account.js";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/main.js" component={Main} exact />
        <Route path="/account.js" component={Account} exact />
        <Route component={Error} />
      </Switch>
    </main>

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
