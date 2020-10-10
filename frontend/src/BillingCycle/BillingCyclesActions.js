import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3003/api'

const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

const create = values => {
  axios.post(`${BASE_URL}/billingCycles`, values)
    .then(resp => {
      toastr.success('SUCESSO', 'Operação realizada com Sucesso...')
    })
    .catch(event => {
      event.response.data.errors.forEach(fail => toastr.error('ERRO :: ', fail))
    })
  return {
    type: 'TEMP'
  }
}

export { getList, create }