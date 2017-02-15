import React from 'react'

class Fetch extends React.Component {
  render() {
    return (
      <div>
        <button type="button"
          name={this.props.name}
          onClick={this.props.onClick}
        >{this.props.label}</button>

        {this.props.loading && 'Loading'}

        <pre>{JSON.stringify(this.props.profile, null, 2)}</pre>
      </div>
    )
  }
}

export default Fetch
