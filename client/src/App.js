import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import Login from "./components/login.js";
import Main from "./components/main.js";
import Account from "./components/account.js";
import Store from "./components/store.js";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/main" component={Main} />
        <Route path="/account" component={Account} />
        <Route path="/store" component={Store} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
