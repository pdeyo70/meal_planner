import React from "react";
import { NavLink, Link, Redirect, withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

// all components go here
import DashArticle from "../DashArticle";
import RecipesContainer from "../RecipesContainer";
import MealPlanner from "../MealPlanner";
import ShoppingList from "../ShoppingList";

class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Dashboard</h1>
        {this.props.logged_in ? null : <Redirect to="/login" />}
        <section>
          <NavLink
            to={`/dashboard/${this.props.current_user.id}/recipes/create`}
          >
            Recipes
          </NavLink>
          <NavLink to={`/dashboard/${this.props.current_user.id}/planner`}>
            Planner
          </NavLink>
          <NavLink
            to={`/dashboard/${this.props.current_user.id}/shopping_list`}
          >
            Shopping List
          </NavLink>
          <Link to={`/dashboard/${this.props.current_user.id}/`}>
            Back to Dashboard Main
          </Link>
        </section>
        <DashArticle />
        <section>
          <Route
            path={`/dashboard/${this.props.current_user.id}/recipes/create`}
            exact
            render={() => <RecipesContainer />}
          />
          <Route
            path={`/dashboard/${this.props.current_user.id}/planner`}
            component={MealPlanner}
          />
          <Route
            path={`/dashboard/${this.props.current_user.id}/shopping_list`}
            component={ShoppingList}
          />
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.authReducer.current_user,
    logged_in: state.authReducer.logged_in
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Dashboard)
);
