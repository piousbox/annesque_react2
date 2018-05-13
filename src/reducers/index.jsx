
import { combineReducers } from 'redux'
import { SET } from '../constants'

const newsitems = (state=[], action) => {
  switch (action.type) {
    case SET.newsitems:
      return action.newsitems
    default:
      return state
  }
}

export default combineReducers({
  newsitems,
})

