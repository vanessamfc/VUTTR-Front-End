import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/1" exact render={Home} />
        <Route path="/sign-in" render={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
