import React from 'react'
import {connect} from 'react-redux'
import Search from './components/search'
import {SET_INPUT_VALUE} from './reducer'

export const Home = ({history, setQuery, search}) => (
  <div className="w-80 center mt5">
    <Search onChange={setQuery} onSearch={() => {
      history.push(`search/${search}`)
    }} />
  </div>
)

export default connect(
  (state) => ({...state.home}),
  (dispatch) => ({
    setQuery: ({target: {value}}) => {
      dispatch({type: SET_INPUT_VALUE, value})
    }
  })
)(Home)
