import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { App } from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css";
//CSS & Bootstrap
import "./assets/css/style.css";

import "./assets/js/bootstrap.min.js";


// import "./assets/css/select2.min.css";


//Font Awesome
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";

import Approuter from "./approuter";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Approuter/>
  </React.StrictMode>
);

// ReactDOM.render(
//   <Approuter/>,
// document.getElementById('root')
// );