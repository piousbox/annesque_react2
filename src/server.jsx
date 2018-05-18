import http from 'http'
import Express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import qs from 'qs'

import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { matchPath, StaticRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
let Router = StaticRouter

import config from 'config'
import serverConfig from './config.json'
import api from './api'
import initializeDb from './db'
import middleware from './middleware'
import reducer from './reducers'
import MainNavigation from './MainNavigation'
import routes from './routes'
import Home from './Home'
import Blog from './Blog'

const store = createStore( reducer, applyMiddleware( thunk ) )













class NoMatch extends React.Component {
  render () {
    return (<div>no match</div>)
  }
}

/* class App extends React.Component {
  render () {
    console.log('+++ +++ server.js App:', this.props, this.state)

    return (
      <div>
        <MainNavigation>
          <div>inside main nav</div>
        </MainNavigation>
        <hr style={{ border: '1px solid green' }} />
        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>)
  }
} */
class App extends React.Component {
  render () {
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

let app = Express()
app.server = http.createServer(app)
app.use(Express.static('dist'))

// logger
app.use(morgan('dev'))


// 3rd party middleware
app.use(cors({
	exposedHeaders: serverConfig.corsHeaders
}))

function handleRender(req, res) {
  console.log("+++ handleRender:")

  const params = qs.parse(req.query)
  const html = renderToString(
    <Router context={{}} location={req.url} >
      <App />
    </Router>
  )

  const finalState = store.getState()
  res.send(renderFullPage(html, finalState))
}
app.use(handleRender)

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/client.js"></script>
      </body>
    </html>
  `
}

app.server.listen(process.env.PORT || serverConfig.port, () => {
  console.log(`+++ +++ Started on port ${app.server.address().port}`)
})

export default app
