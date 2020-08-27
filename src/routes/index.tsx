import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={Home} />
        <Route path="/sign-in" render={SignIn} />
        <Route path="/sign-up" render={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
