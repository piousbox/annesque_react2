'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preloadedState = { preloaded: 'sta1a',
  site: { hereBe: 'si2asdf' },
  tags: {
    travel: { name: 'Travel',
      reports: [{ name: 'Report name 1' }]
    }
  }
};

console.log('+++ pre state:', preloadedState);

var store = (0, _redux.createStore)(_reducers2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;
//# sourceMappingURL=index.js.map