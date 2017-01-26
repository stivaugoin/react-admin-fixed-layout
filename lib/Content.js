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
      var navbar = document.getElementsByClassName('react-admin-fixed-layout-navbar')[0];
      var navbarHeight = navbar && navbar.offsetHeight || 0;
      var header = document.getElementsByClassName('react-admin-fixed-layout-header')[0];
      var headerHeight = header && header.offsetHeight || 0;
      var content = document.getElementsByClassName('react-admin-fixed-layout-content')[0];
      content.style.height = pageHeight - (navbarHeight + headerHeight) + 'px';

      window.addEventListener('resize', function () {
        pageHeight = document.body.offsetHeight;
        content.style.height = pageHeight - (navbarHeight + headerHeight) + 'px';
      }, false);
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