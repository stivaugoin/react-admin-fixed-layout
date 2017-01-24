"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LayoutMenu = function LayoutMenu(props) {
  return _react2["default"].createElement(
    "nav",
    { className: "react-admin-fixed-layout-menu" },
    props.children
  );
};

LayoutMenu.propTypes = {
  children: _react2["default"].PropTypes.node
};

exports["default"] = LayoutMenu;
module.exports = exports["default"];