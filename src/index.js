import http from 'http';
import Express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import serverConfig from './config.json';
import ReactDOM from 'react-dom'
import qs from 'qs'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import React from 'react'

import config from 'config'

class App extends React.Component {
  render () {
    return (
      <div>
        <MainNavigation>
          <Home />
        </MainNavigation>
      </div>)
  }
}

let app = Express();
app.server = http.createServer(app);

import store from './stores'

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: serverConfig.corsHeaders
}));

function handleRender(req, res) {
  const params=qs.parse(req.query)

  const counter = parseInt(params.counter, 10) || 0
  let preloadedState = { counter }

  const html = renderToString(
    <Provider store={store} >
      <App />
    </Provider>
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
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

app.server.listen(process.env.PORT || serverConfig.port, () => {
  console.log(`Started on port ${app.server.address().port}`)
})

export default app;
