'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var Layout = (function (_Component) {
	_inherits(Layout, _Component);

	function Layout() {
		_classCallCheck(this, Layout);

		_get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Layout, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				this.props.children
			);
		}
	}]);

	return Layout;
})(_react.Component);

Layout.propTypes = {
	children: _react2['default'].PropTypes.node.isRequired
};

Layout.Navbar = _Navbar2['default'];
Layout.Menu = _Menu2['default'];
Layout.Sidebar = _Sidebar2['default'];
Layout.Main = _Main2['default'];

exports['default'] = Layout;
module.exports = exports['default'];
/*
<Menu />
<Sidebar />
<Main />
<Footer />
*/