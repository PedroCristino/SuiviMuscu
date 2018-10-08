import React, { Component } from "react";
import Home from "./Home";
import Suivi from "./Suivi";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const routes = [
  {
    component: Home,
    path: "/"
  },
 
  //Selection
  {
    component: Suivi,
    path: "/Suivi"
  },
  {
    component: Home,
    path: "/nouvelle_hybridation"
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
 

