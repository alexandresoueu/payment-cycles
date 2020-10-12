import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

const create = values => {
  return  dispatch => {
    axios.post(`${BASE_URL}/billingCycles`, values)
      .then(resp => {
        toastr.success('SUCESSO', 'Operação realizada com Sucesso...')
        dispatch(init())
      })
      .catch(event => {
        event.response.data.errors.forEach(fail => toastr.error('ERRO :: ', fail))
      })
  }
}

const showUpdate = billingCycle => {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle),
  ]
}

const init = () => {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}

export { getList, create, showUpdate, init }