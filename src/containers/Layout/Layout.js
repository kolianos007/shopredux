import React from "react";
import { Switch, Route } from "react-router-dom";
import Phones from "./Phones/Phones";

const routes = (
  <Switch>
    <Route path="/" component={Phones} exact />
  </Switch>
);

const Layout = () => <div>{routes}</div>;

export default Layout;
