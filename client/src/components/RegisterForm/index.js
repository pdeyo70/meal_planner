import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/authActions";
import "./RegisterForm.css";

class RegisterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      firstName: "",
      lastName: ""
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  verifyPassword = () => {
    return this.state.password === this.state.password2 ? true : false;
  };
  firstLetterToUpper = name => {
    let result = this.state[name];
    if (result.length) {
      result = result.toLowerCase().split("");
      result[0] = result[0].toUpperCase();
      return result.join("");
    } else {
      return;
    }
  };
  createRegisterObject = e => {
    e.preventDefault();
    let firstName = this.firstLetterToUpper("firstName");
    let lastName = this.firstLetterToUpper("lastName");

    const user = {
      username: this.state.username.toLowerCase(),
      email: this.state.email.toLowerCase(),
      password: this.state.password,
      password2: this.state.password2,
      firstName,
      lastName
    };
    return this.props.registerUser(user);
  };
  render() {
    return (
      <Form className="register-form" onSubmit={this.createRegisterObject}>
        {this.props.registerMessage ? (
          <Alert color="primary">
            {this.props.registerMessage}
            {this.props.registerMessage ===
            "Congratulations, you are now ready to sign in to the kitchen!" ? (
              <Link to="/login"> Login</Link>
            ) : null}
          </Alert>
        ) : this.props.registerError ? (
          <Alert color="danger">{this.props.registerError}</Alert>
        ) : (
          <Alert color="secondary">
            Join us in the kitchen by creating an account below.
          </Alert>
        )}
        <FormGroup>
          <Label for="Name">Name</Label>
          <span className="name-span">
            <Input
              onChange={this.changeHandler}
              type="text"
              name="firstName"
              id="Name"
              className="name"
              value={this.state.firstName}
              placeholder="first name"
              required
            />
            <Input
              onChange={this.changeHandler}
              type="text"
              name="lastName"
              id="Name"
              className="name"
              value={this.state.lastName}
              placeholder="last name"
              required
            />
          </span>
        </FormGroup>
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
        <span className="pass-span">
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
        </span>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerMessage: state.authReducer.registerMessage,
    registerError: state.authReducer.registerError
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterForm);
