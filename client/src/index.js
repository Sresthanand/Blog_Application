import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ToastProvider } from "react-toast-notifications";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout={4000}
      placement="top-right"
    >
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
