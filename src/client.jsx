
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

// store config with client's window
const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore( reducer, preloadedState, applyMiddleware( thunk ) )


