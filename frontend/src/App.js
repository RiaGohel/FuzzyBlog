import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import signup from "./components/signup";
import signin from "./components/signin";
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/signup" component={signup} />
          <Route path="/signin" component={signin} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
