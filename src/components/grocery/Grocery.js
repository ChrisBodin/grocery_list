import { Component } from 'react';
import GroceryCounter from './GroceryCounter';

class Grocery extends Component {
  render() {
    const { id, title, price, amount, complete } = this.props
    return (
      <li style={complete ? {...styles.completed} : null }>
        <h1>{title}</h1>
        <h3>{price}</h3>
        {/* <h4>Amount Needed: {amount}</h4> */}
        <GroceryCounter name={<h4>Amount Needed</h4>} /> 
         <button type="button">Complete</button>
         <button type="button">Delete</button>
      </li>
    )
  }
}

const styles = {
  completed: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

export default Grocery;