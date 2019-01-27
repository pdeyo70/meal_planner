import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert
} from "reactstrap";
import "./LoginForm.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class LoginForm extends React.Component {
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
      username: this.state.username.toLowerCase(),
      password: this.state.password
    };
    return this.props.loginUser(user);
  };
  render() {
    return (
      <Form className="login-form" onSubmit={this.createLoginObject}>
        {this.props.message ? (
          <Alert color="primary">{this.props.message}</Alert>
        ) : this.props.error ? (
          <Alert color="danger">{this.props.error}</Alert>
        ) : (
          <Alert color="secondary">Please Enter your credentials below</Alert>
        )}
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
        {this.props.logged_in ? (
          <Redirect to={`/dashboard/${this.props.current_user.id}`} />
        ) : null}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    logging_in: state.authReducer.logging_in,
    logged_in: state.authReducer.logged_in,
    error: state.authReducer.error,
    message: state.authReducer.message,
    current_user: state.authReducer.current_user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser }
  )(LoginForm)
);
