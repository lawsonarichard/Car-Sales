import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "bulma/css/bulma.css";
import "./styles.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { carReducer } from "./reducers";

export const store = createStore(carReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
