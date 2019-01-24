import React from "react";

import LoginForm from "../LoginForm";

class LoginContainer extends React.Component {
  render() {
    return (
      <section>
        <h1>Login</h1>
        <LoginForm />
      </section>
    );
  }
}

export default LoginContainer;
