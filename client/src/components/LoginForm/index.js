import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./LoginForm.css";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  createLoginObject = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    // check if username is present and verify password
    if (this.state.username.length && this.state.password.length) {
      return console.log(user);
    } else {
      alert("Please check credentials and try again");
    }
  };
  render() {
    return (
      <Form className="login-form" onSubmit={this.createLoginObject}>
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
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            onChange={this.changeHandler}
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            placeholder="password"
            required
          />
        </FormGroup>
        <Button>Submit</Button>
        <FormText>
          <Link to="/login/reset">Forgot Password?</Link>
        </FormText>
      </Form>
    );
  }
}
