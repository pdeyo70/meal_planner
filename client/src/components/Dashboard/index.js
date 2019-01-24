import React from "react";
import { Redirect, withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

// all components go here
import DashboardNav from "../DashboardNav";
import DashArticle from "../DashArticle";
import CreateRecipe from "../CreateRecipe";
import MealPlanner from "../MealPlanner";
import ShoppingList from "../ShoppingList";

class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Dashboard</h1>
        {this.props.logged_in ? null : <Redirect to="/login" />}
        <DashboardNav />
        <DashArticle />
        <section>
          <Route
            path={`/dashboard/${this.props.current_user.id}/recipes/create`}
            exact
            render={() => <CreateRecipe />}
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
