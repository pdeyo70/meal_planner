import React from "react";
import { connect } from "react-redux";
import { initRecipe, createRecipe } from "../../actions/recipeActions";

import RecOverview from "./RecOverview";
import RecStartComp from "./RecStartComp";
import RecIngredients from "./RecIngredients";
import RecDirections from "./RecDirections";

class RecipeForm extends React.Component {
  render() {
    return (
      <section>
        {this.props.init_recipe ? (
          <RecStartComp init={this.props.initRecipe} />
        ) : this.props.create_overview ? (
          <RecOverview />
        ) : this.props.create_ingredients ? (
          <RecIngredients />
        ) : this.props.create_directions ? (
          <RecDirections />
        ) : (
          <RecStartComp init={this.props.initRecipe} />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    curr_recipe: state.recipeReducer.curr_recipe,
    init_recipe: state.recipeReducer.init_recipe,
    create_overview: state.recipeReducer.create_overview,
    create_ingredients: state.recipeReducer.create_ingredients,
    create_directions: state.recipeReducer.create_directions
  };
};

export default connect(
  mapStateToProps,
  { initRecipe, createRecipe }
)(RecipeForm);
