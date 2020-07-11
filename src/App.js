import React from "react";
import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
