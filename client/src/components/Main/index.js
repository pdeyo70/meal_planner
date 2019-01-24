import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./Main.css";
import { connect } from "react-redux";

// import components here
import Home from "../Home";
import LoginContainer from "../LoginContainer";
import RegisterContainer from "../RegisterContainer";
import ResetPasswordContainer from "../ResetPasswordContainer";
import Dashboard from "../Dashboard";

class Main extends React.Component {
  render() {
    return (
      <main className="main-container">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginContainer} />
        <Route path="/register" exact component={RegisterContainer} />
        <Route path="/login/reset" exact component={ResetPasswordContainer} />
        <Route
          path={`/dashboard/${this.props.current_user.id}`}
          component={Dashboard}
        />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.authReducer.current_user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Main)
);
