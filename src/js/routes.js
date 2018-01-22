import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from 'pages/home/'
import Search from 'pages/search/'

export default () => (
  <Switch>
    <Route name="home" path="/" exact={true} component={Home} />
    <Route name="home" path="/search/:query" component={Search} />
  </Switch>
)
