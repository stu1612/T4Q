import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/herr">Herr</Link>
          </li>
          <li>
            <Link to="/dam">Dam</Link>
          </li>
          <li>
            <Link to="/junior">Junior</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};
