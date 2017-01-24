"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LayoutHeader = function LayoutHeader(props) {
  return _react2["default"].createElement(
    "header",
    { className: "react-admin-fixed-layout-header" },
    props.children
  );
};

LayoutHeader.propTypes = {
  children: _react2["default"].PropTypes.node
};

exports["default"] = LayoutHeader;
module.exports = exports["default"];