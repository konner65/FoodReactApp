import React from "react";
import { render } from "react-dom";
import TableRow from './TableRow.js';
import axios from "axios";

class Table extends React.Component {
  constructor(props) {
    super(props);
    //this.getFoods();
    this.state = {
      foods: [
      ]
    };
    //this.getFoods = this.getFoods.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/foods').then(response => {
    this.setState({ foods: response.data });
    });
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Restaurant</th>
            <th>Calories</th>
          </tr>
          {this.state.foods.map(food => <TableRow
            name={food.name}
            restaurant={food.restaurant}
            calories={food.calories}
          />)}
        </table>
      </div>
    );
  }
}

export default Table;
