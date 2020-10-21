import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../Dashboard/DashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../BillingCycle/BillingCycleReducer'
import AuthReducer from '../auth/AuthReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer,
})

export default rootReducer
