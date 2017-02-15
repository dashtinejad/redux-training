import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import App from './app/App'

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

const mapStateToProps = (state, ownProps) => ({
  value: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onIncrement: () => {
    dispatch({ type: 'INCREMENT' })
  },
  onDecrement: () => {
    dispatch({ type: 'DECREMENT' })
  }
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
