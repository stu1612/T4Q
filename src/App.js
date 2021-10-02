import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navigation } from "./Navigation";

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
