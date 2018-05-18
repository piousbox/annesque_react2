import http       from 'http'
import Express    from 'express'
import cors       from 'cors'
import morgan     from 'morgan'
import bodyParser from 'body-parser'
import qs         from 'qs'

import React              from 'react'
import ReactDOM           from 'react-dom'
import { renderToString } from 'react-dom/server'
import { createStore, applyMiddleware } from 'redux'
import { Provider }       from 'react-redux'
import thunk              from 'redux-thunk'
import { matchPath, StaticRouter } from 'react-router'

let Router = StaticRouter

import config         from 'config'
import api            from './api'
import initializeDb   from './db'
import middleware     from './middleware'
import reducer        from './reducers'
import MainNavigation from './MainNavigation'
import routes         from './routes'
import App            from './App'

const store = createStore( reducer, applyMiddleware( thunk ) )

class NoMatch extends React.Component {
  render () {
    return (<div>no match</div>)
  }
}

let app = Express()
app.server = http.createServer(app)
app.use(Express.static('dist'))

app.use(morgan('dev')) // logger

app.use(cors({
	exposedHeaders: config.corsHeaders
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
        <title>Annesque - Salsa Dance Studio in Santa Cruz</title>
        <!-- Latest compiled and minified bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <!-- Optional bootstrap theme -->
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-roN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"> -->
        <link rel="stylesheet" href="${config.staticDomain}/annesque.com/style.css" >
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/client.js"></script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-47088821-4"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-47088821-4'); // _vp_ 20180503 20180517 annesque.com
        </script>

        <script>
          function initMap() {
            var myLatLng = {lat: 36.9694354, lng: -122.029866};
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 15,
              center: myLatLng
            });
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Lauden Nelson Community Center'
            });
          }
        </script>
        <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBz9MJTIs6pcyffyN5cbogsb9UT8q9xuxI&callback=initMap">
        </script>
            
      </body>
    </html>
  `
}

app.server.listen(process.env.PORT || config.port, () => {
  console.log(`+++ +++ Started on port ${app.server.address().port}`)
})

export default app
