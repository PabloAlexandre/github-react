import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'
import reducers from './reducers'
import Routes from './routes'
import tachyons from 'tachyons/css/tachyons.min.css'
import fontawesome from 'font-awesome/css/font-awesome.min.css'

const dev_tools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, dev_tools)

export default () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
)
