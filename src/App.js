import { Component } from 'react';
import GroceryList from './components/grocery/GroceryList';
import GroceryForm from './components/grocery/GroceryForm';

class App extends Component {
  state = { groceries: [
    { id: 1, title: 'Pepsi Zero', price: '$99.99', amount: '1', complete: false, },
    { id: 2, title: 'Dots Pretzels', price: '$85.50', amount: '3', complete: false, },
    { id: 3, title: 'Water', price: '$2000.01', amount: '5',complete: false, },
  ] }


  getUniqId = () => {

    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addGrocery = (incomingGrocery) => {
    const { groceries } = this.state 

    const newGrocery = { id: this.getUniqId(), ...incomingGrocery  }
    this.setState({ groceries: [...groceries, newGrocery ]})
  }

  render() {
    const { groceries } = this.state
    return (
      <>
        <h1>My groceries</h1>
        <GroceryForm addGrocery={this.addGrocery} />
        <GroceryList groceries={groceries} listName="Items" />
      </>
    )
  }
}

export default App;

