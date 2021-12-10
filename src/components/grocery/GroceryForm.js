import { Component } from 'react';

class GroceryForm extends Component {
  state = { title: '', price: '', amount: '', complete: false }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })

  }

   
  handleSubmit = (e) => {
    
    e.preventDefault()
   
    this.props.addGrocery(this.state)
    
    this.setState({ title: '', price: '', amount: '', complete: false })
  }

  render() {
    const { title, price, amount } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
     
          name="title"
          value={title}
          onChange={this.handleChange}
          
          required 
          placeholder="Grocery Item"
        />
        <input
          name="price"
          value={price}
          onChange={this.handleChange}
          required 
          placeholder="Grocery Price"
        />
          <input
          name="amount"
          value={amount}
          onChange={this.handleChange}
          required 
          placeholder="Grocery Amount"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default GroceryForm;