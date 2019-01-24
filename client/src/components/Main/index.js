import React from "react";
import { Route } from "react-router-dom";
import "./Main.css";

// import components here
import Home from "../Home";
import LoginContainer from "../LoginContainer";
import RegisterContainer from "../RegisterContainer";
import ResetPasswordContainer from "../ResetPasswordContainer";

class Main extends React.Component {
  render() {
    return (
      <main className="main-container">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginContainer} />
        <Route path="/register" exact component={RegisterContainer} />
        <Route path="/login/reset" exact component={ResetPasswordContainer} />
      </main>
    );
  }
}

export default Main;
