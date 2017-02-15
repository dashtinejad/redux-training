import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, setName } from '../actions/action'
import { setLoading, setProfile } from '../actions/action'
import Fetch from '../components/Fetch'

const mapStateToProps = (state) => ({
  loading: state.loading,
  profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch({type: 'ASYNC_REQUEST'})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Fetch)
