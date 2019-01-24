import React from "react";
import PropTypes from "prop-types";

import RegisterForm from "../RegisterForm";

class RegisterContainer extends React.Component {
  render() {
    return (
      <section>
        <h1>Register Below</h1>
        <RegisterForm />
      </section>
    );
  }
}

export default RegisterContainer;
