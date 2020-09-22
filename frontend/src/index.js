import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'

import App from './main/app'
import reducers from '../src/main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
