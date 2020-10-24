import ReactDOM from "react-dom";
import "./index.css";
// import App from "./app";
import SimpleHabit from "./components/simpleHabit";
import "@fortawesome/fontawesome-free/js/all.js";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById("root")
);
