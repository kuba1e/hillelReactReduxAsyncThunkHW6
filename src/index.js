import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import ErrorBoundry from "./components/ErrorBoundry";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>
);
