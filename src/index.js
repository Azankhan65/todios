import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Use "Router" as alias
import App from "./App";

ReactDOM.render(
  <Router basename="/todios"> {/* Add basename here */}
    <App />
  </Router>,
  document.getElementById("root")
);