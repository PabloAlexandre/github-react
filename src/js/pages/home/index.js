import React from 'react'
import {SET_INPUT_VALUE} from './reducer'
import {connect} from 'react-redux'
import Search from './components/search'
import background from 'src/images/home_background.png'

export const Home = ({history, setQuery, search}) => (
  <div className="w-100 absolute vh-100 cover" style={{backgroundImage: `url(${background})`}}>
    <Search value={search} onChange={setQuery} onSearch={() => {
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
