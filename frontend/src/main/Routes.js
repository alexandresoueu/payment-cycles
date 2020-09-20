import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../Dashboard/Dashboard'
import BillingCycle from '../BillingCycle/BillingCycle'

const Routes = props => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
      <Redirect from='*' to='/' />
    </Router>
  )
}

export default Routes