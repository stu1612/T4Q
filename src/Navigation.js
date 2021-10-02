import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Hem } from "./pages/Hem";
import { Herr } from "./pages/Herr";
import { Dam } from "./pages/Dam";
import { Junior } from "./pages/Junior";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">Hem</Link>
          <Link to="/herr">Herr</Link>
          <Link to="/dam">Dam</Link>
          <Link to="/junior">Junior</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Hem} />
        <Route path="/herr" component={Herr} />
        <Route path="/dam" component={Dam} />
        <Route path="/junior" component={Junior} />
      </Switch>
    </>
  );
};
