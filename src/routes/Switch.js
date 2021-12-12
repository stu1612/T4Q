import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import { Opening } from "../pages/index";
import { Hem } from "../pages/Hem";
import { Herr } from "../pages/Herr";
import { Dam } from "../pages/Dam";
import { Junior } from "../pages/Junior";
import { Nyheter } from "../pages/Nyheter";

export const SwitchRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Opening} />
      <Route path="/Hem" component={Hem} />
      <Route path="/Hem/Nyheter" component={Nyheter} />
      <Route path="/herr" component={Herr} />
      <Route path="/dam" component={Dam} />
      <Route path="/junior" component={Junior} />
    </Switch>
  );
};
