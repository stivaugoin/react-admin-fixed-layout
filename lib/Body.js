"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LayoutBody = function LayoutBody(props) {
  return _react2["default"].createElement(
    "section",
    { className: "react-admin-fixed-layout-body" },
    props.children
  );
};

LayoutBody.propTypes = {
  children: _react2["default"].PropTypes.node
};

exports["default"] = LayoutBody;
module.exports = exports["default"];