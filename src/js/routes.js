import React from 'react'
import {Switch, Route} from 'react-router-dom'

import tachyons from 'tachyons/css/tachyons.min.css'
import fontawesome from 'font-awesome/css/font-awesome.min.css'

import Home from 'pages/home/'
import Search from 'pages/search/'
import User from 'pages/user/'
import Repository from 'pages/repository/'
import {main} from './style.css'

export default () => (
  <Switch>
    <div className={main}>
      <Route name="home" path="/" exact={true} component={Home} />
      <Route name="search" path="/search/:query" exact={true} component={Search} />
      <Route name="user" path="/users/:username" exact={true} component={User} />
      <Route name="repository" path="/users/:username/:repository" exact={true} component={Repository} />
    </div>
  </Switch>
)
