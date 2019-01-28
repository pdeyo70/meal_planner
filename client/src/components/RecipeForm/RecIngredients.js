import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import { initRecipe, createRecipe } from "../../actions/recipeActions";

import RecIngredientList from "./RecIngredientList";

class RecIngredients extends React.Component {
  constructor(props) {
    super();

    this.state = {
      ingredientCount: 1,
      ingredientList: [],
      amount: "",
      name: "",
      amoutType: ""
    };
  }
  componenetDidMount() {
    return this.setState({
      ingredientList: this.props.curr_recipe.ingredients
    });
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  addIngredient = e => {
    e.preventDefault();
    let ingredientList = this.state.ingredientList;
    let ingredient = {
      amount: this.state.amount,
      name: this.state.name,
      amountType: this.state.amountType
    };
    ingredientList.push(ingredient);
    this.setState({ ingredientList, amount: "", name: "", amountType: "" });
  };
  createIngredientsObject = e => {
    e.preventDefault();
    const ingredients = JSON.stringify(this.state.ingredientList);
    console.log(ingredients);
    const recipe = Object.assign({}, this.props.curr_recipe, { ingredients });
    return this.props.createRecipe(recipe, "CREATE_INGREDIENTS");
  };
  goBackToOverview = () => {
    if (this.state.ingredientList) {
      return this.props.initRecipe();
    }
  };
  delete = index => {
    let ingredients = this.state.ingredientList;
    ingredients.splice(index, 1);
    return this.setState({
      ingredientList: ingredients
    });
  };
  render() {
    return (
      <section>
        <Form>
          <FormGroup>
            <p>Ingredient</p>
            <FormGroup row>
              <Label for="rs0">Ingredient Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="name"
                id="rs0"
                onChange={this.changeHandler}
                value={this.state.name}
                required
              />
            </FormGroup>
            <FormGroup row>
              <FormGroup>
                <Label for="ri1">Amount:</Label>
                <Input
                  name="amount"
                  type="text"
                  placeholder="amount"
                  id="ri1"
                  onChange={this.changeHandler}
                  value={this.state.amount}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="ri2">Amount Measurement:</Label>
                <Input
                  name="amountType"
                  type="text"
                  placeholder="Cups, lbs, oz?"
                  id="ri2"
                  onChange={this.changeHandler}
                  value={this.state.amountType}
                  required
                />
              </FormGroup>
            </FormGroup>
          </FormGroup>
          <Button type="submit" onClick={this.addIngredient}>
            add ingredient
          </Button>
          <FormText>New ingredient will be set. See below</FormText>
        </Form>
        <Button onClick={this.createIngredientsObject}>
          Submit Ingredients
        </Button>
        <Button onClick={this.goBackToOverview}>Back to Overview</Button>
        <RecIngredientList
          ingredientList={this.state.ingredientList}
          delete={this.delete}
        />
      </section>
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
  { createRecipe, initRecipe }
)(RecIngredients);
