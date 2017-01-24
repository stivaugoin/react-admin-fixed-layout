(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Layout = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _libAddEvent = require('./lib/add-event');

var _libAddEvent2 = _interopRequireDefault(_libAddEvent);

var LayoutContent = (function (_Component) {
  _inherits(LayoutContent, _Component);

  function LayoutContent() {
    _classCallCheck(this, LayoutContent);

    _get(Object.getPrototypeOf(LayoutContent.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LayoutContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var pageHeight = document.body.offsetHeight;
      var navbarHeight = document.getElementsByClassName('react-admin-fixed-layout-navbar')[0].offsetHeight || 0;
      var headerHeight = document.getElementsByClassName('react-admin-fixed-layout-header')[0].offsetHeight || 0;
      var content = document.getElementsByClassName('react-admin-fixed-layout-content')[0];
      content.style.height = pageHeight - (navbarHeight + headerHeight) + 'px';

      (0, _libAddEvent2['default'])(window, 'resize', function () {
        pageHeight = document.body.offsetHeight;
        content.style.height = pageHeight - (navbarHeight + headerHeight) + 'px';
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'section',
        { className: 'react-admin-fixed-layout-content' },
        this.props.children
      );
    }
  }]);

  return LayoutContent;
})(_react.Component);

LayoutContent.propTypes = {
  children: _react2['default'].PropTypes.node
};

exports['default'] = LayoutContent;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/add-event":9}],3:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Body":1,"./Content":2,"./Header":3,"./Main":5,"./Menu":6,"./Navbar":7,"./Sidebar":8}],5:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],8:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var addEvent = function addEvent(object, type, callback) {
    if (object == null || typeof object == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent('on' + type, callback);
    } else {
        object['on' + type] = callback;
    }
};

exports['default'] = addEvent;
module.exports = exports['default'];

},{}]},{},[4])(4)
});