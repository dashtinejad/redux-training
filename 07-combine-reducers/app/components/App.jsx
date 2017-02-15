import React from 'react'
import CounterContainer from '../containers/CounterContainer'
import NameContainer from '../containers/NameContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <NameContainer />
      </div>
    )
  }
}

export default App
