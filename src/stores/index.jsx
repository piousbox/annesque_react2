import { createStore, applyMiddleware } from 'redux'
import thunk   from 'redux-thunk'
import reducer from '../reducers'

const preloadedState = { preloaded: 'sta1a',
  site: { hereBe: 'si2asdf' },
  tags: {
    travel: { name: 'Travel',
      reports: [
        { name: 'Report name 1' }
      ]
    }
  }
}

console.log('+++ pre state:', preloadedState)

let store = createStore( reducer, preloadedState, applyMiddleware( thunk ) )

export default store

