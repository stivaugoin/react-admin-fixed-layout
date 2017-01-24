"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LayoutNavbar = function LayoutNavbar(props) {
  return _react2["default"].createElement(
    "header",
    { className: "react-admin-fixed-layout-navbar" },
    props.children
  );
};

LayoutNavbar.propTypes = {
  children: _react2["default"].PropTypes.node
};

exports["default"] = LayoutNavbar;
module.exports = exports["default"];