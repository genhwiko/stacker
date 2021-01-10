import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Login from "./components/login.js";
import Main from "./components/main.js";
import Account from "./components/account.js";
import Store from "./components/store.js";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/main" component={Main} />
          <Route path="/account" component={Account} />
          <Route path="/store" component={Store} />
          <Route component={Error} />
        </Switch>
      </main>
    </BrowserRouter>
    // <Container maxidth="lg">
    //   <AppBar className={classes.appBar} position="static" color="inherit">
    //     <Typography className={classes.heading} variant="h2" align="center">
    //       Stacker
    //     </Typography>
    //     <img
    //       className={classes.image}
    //       src={memories}
    //       alt="memories"
    //       height="60"
    //     />
    //   </AppBar>

    //   <Grow in>
    //     <Container>
    //       <Form />
    //     </Container>
    //   </Grow>
    // </Container>
  );
};

export default App;
