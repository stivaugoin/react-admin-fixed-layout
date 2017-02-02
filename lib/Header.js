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

var _reactMeasure = require('react-measure');

var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

function resizeElement(_ref) {
  var _ref$addHeader = _ref.addHeader;
  var addHeader = _ref$addHeader === undefined ? true : _ref$addHeader;

  var navbar = document.getElementsByClassName('react-admin-fixed-layout-navbar')[0];
  var header = document.getElementsByClassName('react-admin-fixed-layout-header')[0];
  var content = document.getElementsByClassName('react-admin-fixed-layout-content')[0];

  var pageHeight = document.body.offsetHeight;
  var navbarHeight = navbar && navbar.offsetHeight || 0;
  var headerHeight = addHeader ? header && header.offsetHeight || 0 : 0;
  content.style.height = pageHeight - (navbarHeight + headerHeight) + 'px';
}

var LayoutHeader = (function (_Component) {
  _inherits(LayoutHeader, _Component);

  function LayoutHeader(props) {
    _classCallCheck(this, LayoutHeader);

    _get(Object.getPrototypeOf(LayoutHeader.prototype), 'constructor', this).call(this, props);
    this.state = {
      dimensions: {}
    };
  }

  _createClass(LayoutHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', function () {
        resizeElement({ addHeader: true });
      }, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      resizeElement({ addHeader: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var height = this.state.dimensions.height;

      if (height) {
        resizeElement({ addHeader: true });
      }

      return _react2['default'].createElement(
        _reactMeasure2['default'],
        { onMeasure: function (dimensions) {
            _this.setState({ dimensions: dimensions });
          } },
        _react2['default'].createElement(
          'header',
          { className: 'react-admin-fixed-layout-header' },
          this.props.children
        )
      );
    }
  }]);

  return LayoutHeader;
})(_react.Component);

LayoutHeader.propTypes = {
  children: _react2['default'].PropTypes.node
};

exports['default'] = LayoutHeader;
module.exports = exports['default'];