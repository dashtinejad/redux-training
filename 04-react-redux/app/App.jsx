import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div>
        Clicked: {this.props.value} times
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    )
  }
}

export default Counter
