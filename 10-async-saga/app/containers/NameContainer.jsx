import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, setName } from '../actions/action'
import TextInput from '../components/TextInput'

const mapStateToProps = (state) => ({
  value: state.name
})

const mapDispatchToProps = (dispatch) => ({
  onChange: name => {
    dispatch(setName(name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TextInput)
