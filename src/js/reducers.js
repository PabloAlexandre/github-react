import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reduce } from 'misc/helpers'
import * as reducers from './pages/**/reducer.js'

const combined = reduce(reducers, (keep, v, k) => {
  return {...keep, [k]: v}
}, {})
export default combineReducers({
  ...combined,
  'routing': routerReducer
})
