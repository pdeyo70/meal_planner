import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class RecipeForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="recipe">Recipe Name</Label>
          <Input
            type="text"
            name="recipe"
            id="recipe"
            placeholder="recipe"
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
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>What kind of meal is this?</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="meal_category" /> Breakfast
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="meal_category" /> Lunch/Dinner
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="meal_category" /> Dessert
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="meal_category" /> Snack
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          {/*This is if you want to upload an image*/}
          <Label for="exampleFile">Got a pic?</Label>
          <Input type="file" name="meal_photo" id="meal_photo" />
          <FormText color="muted">
            Please upload an image that will make our mouths water!
          </FormText>
        </FormGroup>
        <FormText color="danger">
          Once you submit the recipe overview you will be able to add
          ingredients and cooking directions.
        </FormText>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default RecipeForm;
