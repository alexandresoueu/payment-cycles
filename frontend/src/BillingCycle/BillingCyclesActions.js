import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

const create = values => {
  return submit( values, 'post' )
}

const update = values => {
  return submit( values, 'put' )
}

const remove = values => {
  return submit( values, 'delete' )
}

const submit = ( values, method ) => { 
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
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

const showDelete = billingCycle => {
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
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

export { getList, create, update, remove, showUpdate, showDelete, init }