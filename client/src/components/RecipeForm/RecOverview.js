import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import { createRecipe } from "../../actions/recipeActions";

class RecOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: "",
      description: "",
      selectedMeal: "breakfast"
    };
  }
  changeSelected = change => {
    return this.setState({ selectedMeal: change.target.value });
  };
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  initRecipe = e => {
    e.preventDefault();
    const recipe = {
      name: this.state.recipe,
      description: this.state.description,
      timeOfDay: this.state.selectedMeal,
      ingredients: this.state.ingredients,
      directions: this.state.directions
    };

    this.props.createRecipe(recipe, "CREATE_OVERVIEW");
  };
  render() {
    return (
      <Form onSubmit={this.initRecipe}>
        <FormGroup>
          <Label for="recipe">Recipe Name</Label>
          <Input
            type="text"
            name="recipe"
            id="recipe"
            placeholder="recipe"
            value={this.state.recipe}
            onChange={this.changeHandler}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>What kind of meal is this?</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="meal_category"
                value="breakfast"
                onChange={this.changeSelected}
                checked={this.state.selectedMeal === "breakfast"}
              />
              Breakfast
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="meal_category"
                value="lunch/dinner"
                onChange={this.changeSelected}
                checked={this.state.selectedMeal === "lunch/dinner"}
              />
              Lunch/Dinner
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="meal_category"
                value="dessert"
                onChange={this.changeSelected}
                checked={this.state.selectedMeal === "dessert"}
              />
              Dessert
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="meal_category"
                value="snack"
                onChange={this.changeSelected}
                checked={this.state.selectedMeal === "snack"}
              />{" "}
              Snack
            </Label>
          </FormGroup>
        </FormGroup>
        {/*<FormGroup>
          <Label for="exampleFile">Got a pic?</Label>
          <Input type="file" name="meal_photo" id="meal_photo" />
          <FormText color="muted">
            Please upload an image that will make our mouths water!
          </FormText>
        </FormGroup>*/}
        <FormText color="danger">
          Once you submit the recipe overview you will be able to add
          ingredients and cooking directions.
        </FormText>
        <Button type="submit">Submit Overview</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    curr_recipe: state.recipeReducer.curr_recipe
  };
};

export default connect(
  mapStateToProps,
  { createRecipe }
)(RecOverview);
