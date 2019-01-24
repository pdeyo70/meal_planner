import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./DashboardNav.css";

class DashboardNav extends React.Component {
  activeTab = (match, location) => {
    return !match ? false : true;
  };
  render() {
    return (
      <section className="dashboard-nav-container">
        <section className="dash-nav">
          <NavLink
            exact
            activeClassName="active-dash"
            isActive={this.activeTab}
            to={`/dashboard/${this.props.current_user.id}/recipes/create`}
          >
            Create Recipe
          </NavLink>
          <NavLink
            exact
            activeClassName="active-dash"
            isActive={this.activeTab}
            to={`/dashboard/${this.props.current_user.id}/planner`}
          >
            Meal Planning
          </NavLink>
          <NavLink
            exact
            activeClassName="active-dash"
            isActive={this.activeTab}
            to={`/dashboard/${this.props.current_user.id}/shopping_list`}
          >
            Shopping List
          </NavLink>
        </section>
        <section className="dash-back">
          <Link to={`/dashboard/${this.props.current_user.id}/`}>
            Back to Dashboard
          </Link>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.authReducer.current_user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(DashboardNav)
);
