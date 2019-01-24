import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "reactstrap";

class Spinner extends React.Component {
  render() {
    return (
      <div>
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
      </div>
    );
  }
}

export default Spinner;
