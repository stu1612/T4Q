import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Hem } from "../pages";
import { Herr } from "../pages/Herr";
import { Dam } from "../pages/Dam";
import { Junior } from "../pages/Junior";

export const SwitchRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Hem} />
      <Route path="/herr" component={Herr} />
      <Route path="/dam" component={Dam} />
      <Route path="/junior" component={Junior} />
    </Switch>
  );
};
