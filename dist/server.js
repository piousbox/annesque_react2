'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterDom = require('react-router-dom');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _config3 = require('./config.json');

var _config4 = _interopRequireDefault(_config3);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _MainNavigation = require('./MainNavigation');

var _MainNavigation2 = _interopRequireDefault(_MainNavigation);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Blog = require('./Blog');

var _Blog2 = _interopRequireDefault(_Blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var NoMatch = function (_React$Component) {
  _inherits(NoMatch, _React$Component);

  function NoMatch() {
    _classCallCheck(this, NoMatch);

    return _possibleConstructorReturn(this, (NoMatch.__proto__ || Object.getPrototypeOf(NoMatch)).apply(this, arguments));
  }

  _createClass(NoMatch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'no match'
      );
    }
  }]);

  return NoMatch;
}(_react2.default.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      console.log('+++ +++ server.js App:', this.props, this.state);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _MainNavigation2.default,
          null,
          _react2.default.createElement(
            'div',
            null,
            'inside main nav'
          )
        ),
        _react2.default.createElement('hr', { style: { border: '1px solid green' } }),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/blog', component: _Blog2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);
app.use(_express2.default.static('static'));

// logger
app.use((0, _morgan2.default)('dev'));

// 3rd party middleware
app.use((0, _cors2.default)({
  exposedHeaders: _config4.default.corsHeaders
}));

function handleRender(req, res) {
  var params = _qs2.default.parse(req.query);

  console.log('+++ url:', req.url);

  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: {} },
    _react2.default.createElement(App, null)
  ));

  var finalState = store.getState();
  res.send(renderFullPage(html, finalState));
}
app.use(handleRender);

function renderFullPage(html, preloadedState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/static/bundle.js"></script>\n      </body>\n    </html>\n  ';
}

app.server.listen(process.env.PORT || _config4.default.port, function () {
  console.log('Started on port ' + app.server.address().port);
});

exports.default = app;
//# sourceMappingURL=server.js.map