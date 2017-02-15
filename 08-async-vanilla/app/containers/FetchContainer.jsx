import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, setName } from '../actions/action'
import { setLoading, setProfile } from '../actions/action'
import Fetch from '../components/Fetch'

const mapStateToProps = (state) => ({
  label: 'Fetch',
  name: state.name,
  loading: state.loading,
  profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(setLoading(true))

    setTimeout(() => {
      dispatch(setLoading(false))
      dispatch(setProfile({
        "login": "dashtinejad",
        "id": 8079021,
        "type": "User",
        "name": "Mojtaba Dashtinejad",
        "email": "mojtaba@gmail.com",
        "created_at": "2014-07-06T05:18:05Z"
      }))
    }, 1000)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Fetch)
