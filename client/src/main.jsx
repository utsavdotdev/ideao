import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./config/Context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Context>
        <App />
      </Context>
    </Router>
  </>
);
