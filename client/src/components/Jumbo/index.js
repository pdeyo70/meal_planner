import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./Jumbo.css";

const Jumbo = props => {
  return (
    <div className="main-jumbo">
      <Jumbotron>
        <h1 className="display-3">Meal Planner</h1>
        <p className="lead">
          The goal of this App is to allow our users to{" "}
          <mark>Create, Share, and Review</mark> recipes,{" "}
          <mark>Create and Edit</mark> Meal Plans, and <mark>Build</mark> a
          shopping list based off Meal Plans
        </p>
        <hr className="my-2" />
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
