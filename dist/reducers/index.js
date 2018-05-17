'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _constants = require('../constants');

var newsitems = function newsitems() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET.newsitems:
      return action.newsitems;
    default:
      return state;
  }
};

exports.default = (0, _redux.combineReducers)({
  newsitems: newsitems
});
//# sourceMappingURL=index.js.map