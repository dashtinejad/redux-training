import React from 'react'

class Fetch extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onClick}>Fetch</button>

        {this.props.loading && 'Loading'}

        <pre>{JSON.stringify(this.props.profile, null, 2)}</pre>
      </div>
    )
  }
}

export default Fetch
