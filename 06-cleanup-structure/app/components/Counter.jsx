import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div>
        Counter: {this.props.value}
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    )
  }
}

export default Counter
