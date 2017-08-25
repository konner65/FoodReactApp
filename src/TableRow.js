import React from "react";
import { render } from "react-dom";

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.restaurant}</td>
          <td>{this.props.calories}</td>
        </tr>
    );
  }
}

export default TableRow;
