import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'

import { setLoading, setProfile } from './app/actions/action'
import reducer from './app/reducers/reducer'
import App from './app/components/App'

function* asyncRequest() {
  yield put(setLoading(true))
  // TODO
}

function* mySaga() {
  yield takeLatest("ASYNC_REQUEST", asyncRequest);
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)
const store = createStore(reducer, enhancer)

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
