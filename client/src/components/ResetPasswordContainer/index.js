import React from "react";

import ResetPassword from "../ResetPassword";

class ResetPasswordContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValid: false,
      username: ""
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  findUserByUsername = e => {
    e.preventDefault();
    // check if username is present and verify password
    if (this.props.username.length) {
      alert(this.props.username);

      this.setState({ usernameValid: true });
    } else {
      alert("Please check credentials and try again");
    }
  };
  render() {
    return (
      <section>
        <h1>Reset Password</h1>
        <ResetPassword
          validUser={this.findUserByUsername}
          change={this.changeHandler}
          username={this.state.username}
        />
      </section>
    );
  }
}

export default ResetPasswordContainer;
