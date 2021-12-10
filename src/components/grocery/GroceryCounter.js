import { Component } from 'react'

class GroceryCounter extends Component {
  state = { counterVal: 1 }

  inc = () => {
    this.setState({ counterVal: this.state.counterVal + 1})
  }

  dec = () => {
    this.setState({ counterVal: this.state.counterVal - 1})
  }

  render() {
    const { counterVal } = this.state
    const { name, mainColor } = this.props
    return (
      <div style={{ background: mainColor }}>
        {/* <h1>{name}'s Counter Example</h1> */}
        <p>
          {counterVal}
        </p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default GroceryCounter;