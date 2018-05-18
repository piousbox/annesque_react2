
import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

import reducer from './reducers'
import App from './App'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore( reducer, preloadedState, applyMiddleware( thunk ) )

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
