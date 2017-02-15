import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

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


function render() {
  ReactDOM.render(
    <App
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />, document.getElementById('app')
  )
}

render()
store.subscribe(render)
