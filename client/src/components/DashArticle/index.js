import React from "react";
import { connect } from "react-redux";

class DashArticle extends React.Component {
  render() {
    return <section />;
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.authReducer.current_user,
    logged_in: state.authReducer.logged_in
  };
};

export default connect(
  mapStateToProps,
  {}
)(DashArticle);
