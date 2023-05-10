import React, { Component } from "react";
import config from "config";

import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";

const AppContainer = function (props) {
  return (
    <Router basename={`${config.publicPath}`}>
      <>
        <Route render={(props) => <Header {...props} />} />
        <Switch>
          {/* home */}
          <Route exact path="/" component={Home} />
        </Switch>

        <Route render={(props) => <Footer {...props} />} />
      </>
    </Router>
  );
};

export default AppContainer;
