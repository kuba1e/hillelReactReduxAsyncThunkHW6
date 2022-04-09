import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import ErrorBoundry from "./components/ErrorBoundry";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>
);
