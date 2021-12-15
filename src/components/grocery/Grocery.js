import { Component } from 'react';
import GroceryCounter from './GroceryCounter';

class Grocery extends Component {
  render() {
    const { id, title, price, completed, groceryClick } = this.props
    return (
      <>
        <li style={ completed ? {...styles.grocery, ...styles.completed} : styles.item } 
      onClick={ () => groceryClick(id) }>
          <h1>{title}</h1>
         <h3>${price}</h3>
       </li>
        <GroceryCounter name={<h4>Amount Needed</h4>} /> 
         <button type="button">Delete</button>
      </>
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