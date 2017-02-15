import React from 'react'
import CounterContainer from '../containers/CounterContainer'
import NameContainer from '../containers/NameContainer'
import FetchContainer from '../containers/FetchContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <NameContainer />
        <FetchContainer />
      </div>
    )
  }
}

export default App
