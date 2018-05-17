
import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// import './index.html'
// import 'babel-core/polyfill'
// import 'normalize.css/normalize.css'

import App from './App'
import './scss/app.scss'
import reducer from './reducers'

// store config with client's window
const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore( reducer, preloadedState, applyMiddleware( thunk ) )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
