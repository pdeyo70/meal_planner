import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import allReducers from "./reducers";
import setAuthorizationToken from "./utils/setAuthorizationToken";

const store = createStore(allReducers, applyMiddleware(ReduxThunk, logger));

if (localStorage.getItem("meal_planner_token")) {
  setAuthorizationToken(localStorage.meal_planner_token);
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
