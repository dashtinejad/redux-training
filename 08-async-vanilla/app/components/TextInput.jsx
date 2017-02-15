import React from 'react'

class TextInput extends React.Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const value = e.target.value
    this.props.onChange(value)
  }

  render() {
    return (
      <input type="text" value={this.props.value} onChange={this.onChange} />
    )
  }
}

export default TextInput
