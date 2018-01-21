import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from 'pages/home/'

export default () => (
  <Switch>
    <Route name="home" path="/" exact={true} component={Home} />
  </Switch>
)
