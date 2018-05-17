'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Blog = require('./Blog');

var _Blog2 = _interopRequireDefault(_Blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ path: '/',
  component: _Home2.default,
  loadData: function loadData() {
    console.log('loading?..');return {};
  }
}, { path: '/blog',
  component: _Blog2.default,
  loadData: function loadData() {
    console.log('blog loaging');return {};
  }
}];

exports.default = routes;
//# sourceMappingURL=routes.js.map