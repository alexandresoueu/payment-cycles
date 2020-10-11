import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

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
        dispatch([
          resetForm('billingCycleForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate')
        ])
      })
      .catch(event => {
        event.response.data.errors.forEach(fail => toastr.error('ERRO :: ', fail))
      })
  }
}

export { getList, create }