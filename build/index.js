'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const result = _fs2.default.readFileSync(_path2.default.resolve(`${__dirname}/index.js`));

console.log(result.toString());

function add(a, b) {
  return a + b;
}