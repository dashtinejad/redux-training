import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../actions/action'
import Counter from '../components/Counter'

const mapStateToProps = (state) => ({
  value: state
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => {
    dispatch(increment())
  },
  onDecrement: () => {
    dispatch(decrement())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
