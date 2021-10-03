import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { Hem } from "./pages/index";
import { Herr } from "./pages/Herr";
import { Dam } from "./pages/Dam";
import { Junior } from "./pages/Junior";
import { ThemeToggler } from "./components/ThemeToggler/ThemeToggler";

export const Navigation = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  return (
    <Router>
      <nav style={{ display: "flex", background: "red" }}>
        <ul>
          <Link to="/">Hem</Link>
          <Link to="/herr">Herr</Link>
          <Link to="/dam">Dam</Link>
          <Link to="/junior">Junior</Link>
        </ul>
        <ThemeToggler themeToggler={themeToggler} />
      </nav>
      <Switch>
        <Route exact path="/" component={Hem} />
        <Route path="/herr" component={Herr} />
        <Route path="/dam" component={Dam} />
        <Route path="/junior" component={Junior} />
      </Switch>
    </Router>
  );
};
