import React from "react";
import { Table } from "reactstrap";

class RecIngredientList extends React.Component {
  delete = e => {
    const id = e.currentTarget.dataset.delete;
    return this.props.delete(id);
  };
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Measurement</th>
            <th>Name</th>
            <th>Remove</th>
          </tr>
        </thead>
        {this.props.ingredientList
          ? this.props.ingredientList.map((ing, index) => {
              return (
                <tbody key={ing}>
                  <tr>
                    <th scope="row">{ing.amount}</th>
                    <td>{ing.amountType}</td>
                    <td>{ing.name}</td>
                    <td data-delete={index} onClick={this.delete}>
                      X
                    </td>
                  </tr>
                </tbody>
              );
            })
          : null}
      </Table>
    );
  }
}

export default RecIngredientList;
