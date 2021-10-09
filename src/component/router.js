import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "pages/login";
import Main from "pages/main";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;
