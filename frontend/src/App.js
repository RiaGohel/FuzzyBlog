import logo from "./logo.svg";
import "./css/App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
