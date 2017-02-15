import { createStore } from 'redux'

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

var store = createStore(counter)

var valueElem = document.getElementById('value')
function render() {
  valueElem.innerText = store.getState()
}

render()
store.subscribe(render)

document.getElementById('increment').onclick = function () {
  store.dispatch({ type: 'INCREMENT' })
}

document.getElementById('decrement').onclick = function () {
  store.dispatch({ type: 'DECREMENT' })
}