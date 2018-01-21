import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import * as reducers from './pages/**/reducer.js'

const combined = Object.keys(reducers).reduce((keep, k) => {
  return {...keep, [k]: reducers[k]}
}, {})

export default combineReducers({
  ...combined,
  'routing': routerReducer
})
