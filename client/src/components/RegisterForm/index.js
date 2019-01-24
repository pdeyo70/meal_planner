import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class RegisterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      password2: ""
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  verifyPassword = () => {
    return this.state.password === this.state.password2 ? true : false;
  };
  createRegisterObject = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    // check if username is present and verify password
    if (this.state.username.length && this.verifyPassword()) {
      alert("it works");
      return console.log(user);
    } else {
      alert("Please check credentials and try again");
    }
  };
  render() {
    return (
      <Form className="login-form" onSubmit={this.createRegisterObject}>
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
          <Label for="email">Email</Label>
          <Input
            onChange={this.changeHandler}
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            placeholder="email"
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
    );
  }
}

export default RegisterForm;
