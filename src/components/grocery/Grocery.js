import { Component } from 'react';

class Grocery extends Component {
  render() {
    const { id, title, price, amount, complete } = this.props
    return (
      <li style={complete ? {...styles.completed} : null }>
        <h1>{title}</h1>
        <h3>{price}</h3>
        <h4>Amount Needed: {amount}</h4>
        <a href = "" >
         <button type="button">Complete</button>
        </a>
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