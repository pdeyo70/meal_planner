import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class ResetPassword extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      password2: "",
      usernameValid: false
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  findUserByUsername = e => {
    e.preventDefault();
    // check if username is present and verify password
    if (this.state.username.length) {
      return this.setState({ usernameValid: true });
    } else {
      alert("Please check credentials and try again");
    }
  };
  changeUserPassword = e => {
    e.preventDefault();

    if (
      this.state.password.length > 7 &&
      this.state.password === this.state.password2
    ) {
      const user = {
        username: this.state.username,
        password: this.state.password
      };
      return console.log(user);
    } else {
      alert("Check to make sure your passwords match");
    }
  };
  render() {
    const usernameValid = this.state.usernameValid;
    return (
      <section>
        {usernameValid ? (
          <Form className="login-form" onSubmit={this.changeUserPassword}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                onChange={this.changeHandler}
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                placeholder="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password2">Retype Password</Label>
              <Input
                onChange={this.changeHandler}
                type="password"
                name="password2"
                id="password2"
                value={this.state.password2}
                placeholder="password"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        ) : (
          <Form className="login-form" onSubmit={this.findUserByUsername}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                onChange={this.changeHandler}
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                placeholder="username"
                required
              />
            </FormGroup>
            <FormText>provide username to change password</FormText>
            <br />
            <Button>Submit</Button>
          </Form>
        )}
      </section>
    );
  }
}
