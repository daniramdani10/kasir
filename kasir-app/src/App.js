import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./components";
import { Sukses, Home } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sukses" component={Sukses} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
