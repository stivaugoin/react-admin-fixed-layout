"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LayoutMain = function LayoutMain(props) {
  return _react2["default"].createElement(
    "main",
    { className: "react-admin-fixed-layout-main" },
    props.children
  );
};

LayoutMain.propTypes = {
  children: _react2["default"].PropTypes.node,
  noScroll: _react2["default"].PropTypes.bool
};

exports["default"] = LayoutMain;
module.exports = exports["default"];