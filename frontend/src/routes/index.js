import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateNivel from "../pages/CreateNivel";
import ListNivel from "../pages/ListNivel";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/nivel/create" component={CreateNivel} />
        <Route path="/nivel/list" component={ListNivel} />
        <Route path="/" component={() => <h1>Hello</h1>} />
      </Switch>
    </Router>
  );
};
export default Routes;
