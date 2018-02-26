/*
* created by lu.yixin on 2018/02/22
*/

import React from 'react'
import { HashRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom'

import Main from '@/views/main'

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
  </Router>
)
