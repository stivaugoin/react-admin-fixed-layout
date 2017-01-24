"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LayoutSidebar = function LayoutSidebar(props) {
  return _react2["default"].createElement(
    "aside",
    { className: "react-admin-fixed-layout-sidebar" },
    props.children
  );
};

LayoutSidebar.propTypes = {
  children: _react2["default"].PropTypes.node
};

exports["default"] = LayoutSidebar;
module.exports = exports["default"];