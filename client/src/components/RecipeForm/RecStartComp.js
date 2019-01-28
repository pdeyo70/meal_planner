import React from "react";

class RecStartOverview extends React.Component {
  render() {
    return (
      <section>
        <h3>Start creating a personalized recipe</h3>
        <button onClick={this.props.init}>Start Recipe</button>
      </section>
    );
  }
}

export default RecStartOverview;
