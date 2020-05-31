import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import Landing from "./Landing";
import Navigation from "./Navigation";
import Supply from "./Supply";
import Onboarding from "./Onboarding";
import Contact from "./Contact";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/Supply" component={Supply} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Onboarding" component={Onboarding} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
