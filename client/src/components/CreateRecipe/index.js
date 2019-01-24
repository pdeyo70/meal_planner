import React from "react";

import RecipeForm from "../RecipeForm";

class RecipesContainer extends React.Component {
  render() {
    return (
      <section>
        <h2>Let's Create some delicious meals </h2>
        <RecipeForm />
      </section>
    );
  }
}

export default RecipesContainer;
