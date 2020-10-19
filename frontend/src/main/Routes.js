import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../Dashboard/Dashboard'
import BillingCycle from '../BillingCycle/BillingCycle'

const Routes = props => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
  )
}

export default Routes
