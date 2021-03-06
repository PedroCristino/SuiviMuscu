import React, { Component } from "react";
import Home from "./Home";
import Seances from "./Seances";
import Gestion from "./Gestion";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const routes = [
  {
    component: Home,
    path: "/"
  },

  //Selection
  {
    component: Seances,
    path: "/Seances"
  },
  {
    component: Gestion,
    path: "/Gestion"
  }
];

export default class App extends Component {
  renderRoute = route => {
    const { path, component } = route;
    return <Route exact path={path} component={component} key={path} />;
  };

  renderRoutes() {
    return routes.map(route => this.renderRoute(route));
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>{this.renderRoutes()}</Switch>
      </BrowserRouter>
    );
  }
}
