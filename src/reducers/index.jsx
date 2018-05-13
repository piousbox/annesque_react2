
import { combineReducers } from 'redux'
import C from '../constants'

const newsitems = (state=[], action) {
  switch (action.type) {
    case C.SET.newsitems:
      return action.newsitems
    default:
      return state
  }
}

export default combineReducers({
  newsitems,
})

