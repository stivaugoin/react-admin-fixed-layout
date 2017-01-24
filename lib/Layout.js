'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var Layout = function Layout(props) {
	return _react2['default'].createElement(
		'div',
		{ className: 'react-admin-fixed-layout' },
		props.children
	);
};

Layout.propTypes = {
	children: _react2['default'].PropTypes.node.isRequired
};

Layout.Body = _Body2['default'];
Layout.Content = _Content2['default'];
Layout.Header = _Header2['default'];
Layout.Main = _Main2['default'];
Layout.Menu = _Menu2['default'];
Layout.Navbar = _Navbar2['default'];
Layout.Sidebar = _Sidebar2['default'];

exports['default'] = Layout;
module.exports = exports['default'];