
import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

// import './index.html'
// import 'babel-core/polyfill'
// import 'normalize.css/normalize.css'

import reducer from './reducers'
import MainNavigation from './MainNavigation'
import Home from './Home'
import Blog from './Blog'


/* class App extends React.Component {
	render () {
		console.log('+++ App render on client:', this.props, this.state)
		return (
			<div>app on client</div>
		)
	}
} */
class App extends React.Component {
  render () {
    console.log('+++ +++ client App renders')

    return (
      <MainNavigation>
        <div>inside main nav</div>
	      <hr style={{ border: '1px solid green' }} />
	      <Route exact path="/blog" component={Blog} />
	      <Route exact path="/" component={Home} />
      </MainNavigation>
      )
  }
}

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore( reducer, preloadedState, applyMiddleware( thunk ) )

console.log('+++ this is client!')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
