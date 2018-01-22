import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from 'pages/home/'
import Search from 'pages/search/'
import User from 'pages/user/'

export default () => (
  <Switch>
    <Route name="home" path="/" exact={true} component={Home} />
    <Route name="search" path="/search/:query" component={Search} />
    <Route name="user" path="/users/:username" component={User} />
  </Switch>
)
