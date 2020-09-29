import { combineReducers } from 'redux'
import DashboardReducer from '../Dashboard/DashboardReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer
})

export default rootReducer
