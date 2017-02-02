require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getCloneDimensions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getMargin = require('./get-margin');

var _getMargin2 = _interopRequireDefault(_getMargin);

function getCloneDimensions(node, options) {
  var parentNode = node.parentNode;

  var context = document.createElement('div');
  var clone = node.cloneNode(true);
  var style = getComputedStyle(node);
  var rect = undefined,
      width = undefined,
      height = undefined,
      margin = undefined;

  // give the node some context to measure off of
  // no height and hidden overflow hide node copy
  context.style.height = 0;
  context.style.overflow = 'hidden';

  // clean up any attributes that might cause a conflict with the original node
  // i.e. inputs that should focus or submit data
  clone.setAttribute('id', '');
  clone.setAttribute('name', '');

  // set props to get a true dimension calculation
  if (options.display || style.getPropertyValue('display') === 'none') {
    clone.style.display = options.display || 'block';
  }
  if (options.width || !parseInt(style.getPropertyValue('width'))) {
    clone.style.width = options.width || 'auto';
  }
  if (options.height || !parseInt(style.getPropertyValue('height'))) {
    clone.style.height = options.height || 'auto';
  }

  // append copy to context
  context.appendChild(clone);

  // append context to DOM so we can measure
  parentNode.appendChild(context);

  // get accurate dimensions
  rect = clone.getBoundingClientRect();
  width = clone.offsetWidth;
  height = clone.offsetHeight;

  // destroy clone
  parentNode.removeChild(context);

  return {
    rect: {
      width: width,
      height: height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left
    },
    margin: (0, _getMargin2['default'])(style)
  };
}

module.exports = exports['default'];
},{"./get-margin":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getMargin;
var toNumber = function toNumber(n) {
  return parseInt(n) || 0;
};

function getMargin(style) {
  return {
    top: toNumber(style.marginTop),
    right: toNumber(style.marginRight),
    bottom: toNumber(style.marginBottom),
    left: toNumber(style.marginLeft)
  };
}

module.exports = exports["default"];
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getNodeDimensions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getCloneDimensions = require('./get-clone-dimensions');

var _getCloneDimensions2 = _interopRequireDefault(_getCloneDimensions);

var _getMargin = require('./get-margin');

var _getMargin2 = _interopRequireDefault(_getMargin);

function getNodeDimensions(node) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var rect = node.getBoundingClientRect();
  var width = undefined,
      height = undefined,
      margin = undefined;

  // determine if we need to clone the element to get proper dimensions or not
  if (!rect.width || !rect.height || options.clone) {
    var cloneDimensions = (0, _getCloneDimensions2['default'])(node, options);
    rect = cloneDimensions.rect;
    margin = cloneDimensions.margin;
  }
  // if no cloning needed, we need to determine if margin should be accounted for
  else if (options.margin) {
      margin = (0, _getMargin2['default'])(getComputedStyle(node));
    }

  // include margin in width/height calculation if desired
  if (options.margin) {
    width = margin.left + rect.width + margin.right;
    height = margin.top + rect.height + margin.bottom;
  } else {
    width = rect.width;
    height = rect.height;
  }

  return {
    width: width,
    height: height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left
  };
}

module.exports = exports['default'];
},{"./get-clone-dimensions":1,"./get-margin":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _getNodeDimensions = require('get-node-dimensions');

var _getNodeDimensions2 = _interopRequireDefault(_getNodeDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Measure = function (_Component) {
  _inherits(Measure, _Component);

  function Measure(props) {
    _classCallCheck(this, Measure);

    var _this = _possibleConstructorReturn(this, (Measure.__proto__ || Object.getPrototypeOf(Measure)).call(this, props));

    _this.measure = function () {
      var includeMargin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.includeMargin;
      var useClone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.useClone;

      // bail out if we shouldn't measure
      if (!_this.props.shouldMeasure) return;

      // if no parent available we need to requery the DOM node
      if (!_this._node.parentNode) {
        _this._setDOMNode();
      }

      var dimensions = _this.getDimensions(_this._node, includeMargin, useClone);
      var isChildFunction = typeof _this.props.children === 'function';

      // determine if we need to update our callback with new dimensions or not
      _this._propsToMeasure.some(function (prop) {
        if (dimensions[prop] !== _this._lastDimensions[prop]) {
          // update our callback if we've found a dimension that has changed
          _this.props.onMeasure(dimensions);

          // update state to send dimensions to child function
          if (isChildFunction && typeof _this !== 'undefined') {
            _this.setState({ dimensions: dimensions });
          }

          // store last dimensions to compare changes
          _this._lastDimensions = dimensions;

          // we don't need to look any further, bail out
          return true;
        }
      });
    };

    _this.state = {
      dimensions: {
        width: 0,
        height: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    };
    _this._node = null;
    _this._propsToMeasure = _this._getPropsToMeasure(props);
    _this._lastDimensions = {};
    return _this;
  }

  _createClass(Measure, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._setDOMNode();

      // measure on first render
      this.measure();

      // add component to resize observer to detect changes on resize
      this.resizeObserver = new _resizeObserverPolyfill2.default(function () {
        return _this2.measure();
      });
      this.resizeObserver.observe(this._node);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var config = _ref.config;
      var whitelist = _ref.whitelist;
      var blacklist = _ref.blacklist;

      // we store the properties ourselves so we need to update them if the
      // whitelist or blacklist props have changed
      if (this.props.whitelist !== whitelist || this.props.blacklist !== blacklist) {
        this._propsToMeasure = this._getPropsToMeasure({ whitelist: whitelist, blacklist: blacklist });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.resizeObserver.disconnect(this._node);
      this._node = null;
    }
  }, {
    key: '_setDOMNode',
    value: function _setDOMNode() {
      this._node = _reactDom2.default.findDOMNode(this);
    }
  }, {
    key: 'getDimensions',
    value: function getDimensions() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._node;
      var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.includeMargin;
      var useClone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.useClone;
      var cloneOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props.cloneOptions;

      return (0, _getNodeDimensions2.default)(node, _extends({
        margin: includeMargin,
        clone: useClone
      }, cloneOptions));
    }
  }, {
    key: '_getPropsToMeasure',
    value: function _getPropsToMeasure(_ref2) {
      var whitelist = _ref2.whitelist;
      var blacklist = _ref2.blacklist;

      return whitelist.filter(function (prop) {
        return blacklist.indexOf(prop) < 0;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react.Children.only(typeof children === 'function' ? children(this.state.dimensions) : children);
    }
  }]);

  return Measure;
}(_react.Component);

Measure.propTypes = {
  whitelist: _react.PropTypes.array,
  blacklist: _react.PropTypes.array,
  includeMargin: _react.PropTypes.bool,
  useClone: _react.PropTypes.bool,
  cloneOptions: _react.PropTypes.object,
  shouldMeasure: _react.PropTypes.bool,
  onMeasure: _react.PropTypes.func
};
Measure.defaultProps = {
  whitelist: ['width', 'height', 'top', 'right', 'bottom', 'left'],
  blacklist: [],
  includeMargin: true,
  useClone: false,
  cloneOptions: {},
  shouldMeasure: true,
  onMeasure: function onMeasure() {
    return null;
  }
};
exports.default = Measure;
module.exports = exports['default'];
},{"get-node-dimensions":3,"react":undefined,"react-dom":undefined,"resize-observer-polyfill":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Measure = require('./Measure');

var _Measure2 = _interopRequireDefault(_Measure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Measure2.default;
module.exports = exports['default'];
},{"./Measure":4}],6:[function(require,module,exports){
(function (global){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ResizeObserver = factory());
}(this, (function () {
'use strict';

/**
 * Exports global object for the current environment.
 */
var global$1 = (function () {
    if (typeof self != 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window != 'undefined' && window.Math === Math) {
        return window;
    }

    if (typeof global != 'undefined' && global.Math === Math) {
        return global;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = global$1.window === global$1 && typeof document != 'undefined';

var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * A collection of shims that provides minimal
 * support of WeakMap and Map classes.
 *
 * These implementations are not meant to be used outside of
 * ResizeObserver modules as they cover only a limited range
 * of use cases.
 */
/* eslint-disable require-jsdoc */
var hasNativeCollections = typeof global$1.WeakMap === 'function' && typeof global$1.Map === 'function';

var WeakMap = function () {
    if (hasNativeCollections) {
        return global$1.WeakMap;
    }

    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            var matches = entry[0] === key;

            if (matches) {
                result = index;
            }

            return matches;
        });

        return result;
    }

    return function () {
        function _class() {
            classCallCheck(this, _class);

            this.__entries__ = [];
        }

        _class.prototype.get = function get(key) {
            var index = getIndex(this.__entries__, key);

            return this.__entries__[index][1];
        };

        _class.prototype.set = function set(key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        _class.prototype.delete = function _delete(key) {
            var entries = this.__entries__,
                index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        _class.prototype.has = function has(key) {
            return !!~getIndex(this.__entries__, key);
        };

        return _class;
    }();
}();

var Map = function () {
    if (hasNativeCollections) {
        return global$1.Map;
    }

    return function (_WeakMap) {
        inherits(_class2, _WeakMap);

        function _class2() {
            classCallCheck(this, _class2);
            return possibleConstructorReturn(this, _WeakMap.apply(this, arguments));
        }

        _class2.prototype.clear = function clear() {
            this.__entries__.splice(0, this.__entries__.length);
        };

        _class2.prototype.entries = function entries() {
            return this.__entries__.slice();
        };

        _class2.prototype.keys = function keys() {
            return this.__entries__.map(function (entry) {
                return entry[0];
            });
        };

        _class2.prototype.values = function values() {
            return this.__entries__.map(function (entry) {
                return entry[1];
            });
        };

        _class2.prototype.forEach = function forEach(callback) {
            var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            for (var _iterator = this.__entries__, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var entry = _ref;

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        createClass(_class2, [{
            key: 'size',
            get: function get() {
                return this.__entries__.length;
            }
        }]);
        return _class2;
    }(WeakMap);
}();

/**
 * A shim for requestAnimationFrame which falls back
 * to setTimeout if the first one is not supported.
 *
 * @returns {Number} Requests' identifier.
 */
var requestAnimFrame = (function () {
    if (typeof global$1.requestAnimationFrame === 'function') {
        return global$1.requestAnimationFrame;
    }

    return function (callback) {
        return setTimeout(function () {
            return callback(Date.now());
        }, 1000 / 60);
    };
})();

/**
 * Creates a wrapper function that ensures that provided callback will
 * be invoked only once during the specified delay period. It caches the last
 * call and re-invokes it after pending activation is resolved.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {Number} [delay = 0] - Delay after which to invoke callback.
 * @param {Boolean} [afterRAF = false] - Whether function needs to be invoked as
 *      a requestAnimationFrame callback.
 * @returns {Function}
 */
var throttle = function (callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var afterRAF = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var leadCall = null,
        edgeCall = null;

    /**
     * Invokes the original callback function and schedules a new invocation if
     * the wrapper was called during current request.
     */
    function invokeCallback() {
        // Invoke original function.
        callback.apply.apply(callback, leadCall);

        leadCall = null;

        // Schedule new invocation if there was a call during delay period.
        if (edgeCall) {
            proxy.apply.apply(proxy, edgeCall);

            edgeCall = null;
        }
    }

    /**
     * Callback that will be invoked after the specified delay period. It will
     * delegate invocation of the original function to the requestAnimationFrame
     * if "afterRAF" parameter is set to "true".
     */
    function timeoutCallback() {
        afterRAF ? requestAnimFrame(invokeCallback) : invokeCallback();
    }

    /**
     * Schedules invocation of the initial function.
     */
    function proxy() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // eslint-disable-next-line no-invalid-this
        var callData = [this, args];

        // Cache current call to be re-invoked later if there is already a
        // pending call.
        if (leadCall) {
            edgeCall = callData;
        } else {
            leadCall = callData;

            // Schedule new invocation.
            setTimeout(timeoutCallback, delay);
        }
    }

    return proxy;
};

// Define whether the MutationObserver is supported.
var mutationsSupported = typeof global$1.MutationObserver === 'function';

/**
 * Controller class which handles updates of ResizeObserver instances.
 * It decides when and for how long it's necessary to run updates by listening
 * to the windows "resize" event along with a tracking of DOM mutations
 * (nodes removal, changes of attributes, etc.).
 *
 * Transitions and animations are handled by running a repeatable update cycle
 * until the dimensions of observed elements are changing.
 *
 * Continuous update cycle will be used automatically in case MutationObserver
 * is not supported.
 */
var ResizeObserverController = function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @param {Boolean} [continuousUpdates = false] - Whether to use a continuous
     *      update cycle.
     */
    function ResizeObserverController() {
        var continuousUpdates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        classCallCheck(this, ResizeObserverController);

        // Continuous updates must be enabled if MutationObserver is not supported.
        this._isCycleContinuous = !mutationsSupported || continuousUpdates;

        // Indicates whether DOM listeners have been added.
        this._listenersEnabled = false;

        // Keeps reference to the instance of MutationObserver.
        this._mutationsObserver = null;

        // A list of connected observers.
        this._observers = [];

        // Make sure that the "refresh" method is invoked as a RAF callback and
        // that it happens only once during the period of 30 milliseconds.
        this.refresh = throttle(this.refresh.bind(this), 30, true);

        // Additionally postpone invocation of the continuous updates.
        this._continuousUpdateHandler = throttle(this.refresh, 70);
    }

    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserver} observer - Observer to be added.
     */
    ResizeObserverController.prototype.connect = function connect(observer) {
        if (!this.isConnected(observer)) {
            this._observers.push(observer);
        }

        // Add listeners if they haven't been added yet.
        if (!this._listenersEnabled) {
            this._addListeners();
        }
    };

    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserver} observer - Observer to be removed.
     */
    ResizeObserverController.prototype.disconnect = function disconnect(observer) {
        var observers = this._observers;
        var index = observers.indexOf(observer);

        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }

        // Remove listeners if controller has no connected observers.
        if (!observers.length && this._listenersEnabled) {
            this._removeListeners();
        }
    };

    /**
     * Tells whether the provided observer is connected to controller.
     *
     * @param {ResizeObserver} observer - Observer to be checked.
     * @returns {Boolean}
     */
    ResizeObserverController.prototype.isConnected = function isConnected(observer) {
        return !!~this._observers.indexOf(observer);
    };

    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes or if continuous updates are enabled.
     */
    ResizeObserverController.prototype.refresh = function refresh() {
        var hasChanges = this._updateObservers();

        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (hasChanges) {
            this.refresh();
        } else if (this._isCycleContinuous && this._listenersEnabled) {
            // Automatically repeat cycle if it's necessary.
            this._continuousUpdateHandler();
        }
    };

    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {Boolean} Returns "true" if any observer has detected changes in
     *      dimensions of its' elements.
     */
    ResizeObserverController.prototype._updateObservers = function _updateObservers() {
        var hasChanges = false;

        for (var _iterator = this._observers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var observer = _ref;

            // Collect active observations.
            observer.gatherActive();

            // Broadcast active observations and set the flag that changes have
            // been detected.
            if (observer.hasActive()) {
                hasChanges = true;

                observer.broadcastActive();
            }
        }

        return hasChanges;
    };

    /**
     * Initializes DOM listeners.
     *
     * @private
     */
    ResizeObserverController.prototype._addListeners = function _addListeners() {
        // Do nothing if listeners have been already added.
        if (this._listenersEnabled) {
            return;
        }

        window.addEventListener('resize', this.refresh);

        // Subscribe to DOM mutations if it's possible as they may lead to
        // changes in the dimensions of elements.
        if (mutationsSupported) {
            this._mutationsObserver = new MutationObserver(this.refresh);

            this._mutationsObserver.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }

        this._listenersEnabled = true;

        // Don't wait for a possible event that might trigger the update of
        // observers and manually initiate the update process.
        if (this._isCycleContinuous) {
            this.refresh();
        }
    };

    /**
     * Removes DOM listeners.
     *
     * @private
     */
    ResizeObserverController.prototype._removeListeners = function _removeListeners() {
        // Do nothing if listeners have been already removed.
        if (!this._listenersEnabled) {
            return;
        }

        window.removeEventListener('resize', this.refresh);

        if (this._mutationsObserver) {
            this._mutationsObserver.disconnect();
        }

        this._mutationsObserver = null;
        this._listenersEnabled = false;
    };

    createClass(ResizeObserverController, [{
        key: 'continuousUpdates',

        /**
         * Tells whether continuous updates are enabled.
         *
         * @returns {Boolean}
         */
        get: function get() {
            return this._isCycleContinuous;
        },

        /**
         * Enables or disables continuous updates.
         *
         * @param {Boolean} useContinuous - Whether to enable or disable continuous
         *      updates. Note that the value won't be applied if MutationObserver is
         *      not supported.
         */
        set: function set(useContinuous) {
            // The state of continuous updates should not be modified if
            // MutationObserver is not supported.
            if (!mutationsSupported) {
                return;
            }

            this._isCycleContinuous = useContinuous;

            // Immediately start the update cycle in order not to wait for a possible
            // event that might initiate it.
            if (this._listenersEnabled && useContinuous) {
                this.refresh();
            }
        }
    }]);
    return ResizeObserverController;
}();

// Placeholder of an empty content rectangle.
var emptyRect = createContentRect(0, 0, 0, 0);

/**
 * Extracts computed styles of provided element.
 *
 * @param {Element} target
 * @returns {CSSStyleDeclaration}
 */
function getStyles(target) {
    return window.getComputedStyle(target);
}

/**
 * Converts provided string defined in q form of '{{value}}px' to number.
 *
 * @param {String} value
 * @returns {Number}
 */
function pixelsToNumber(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...String} positions - Borders positions (top, right, ...)
 * @returns {Number}
 */
function getBordersSize(styles) {
    for (var _len = arguments.length, positions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        positions[_key - 1] = arguments[_key];
    }

    return positions.reduce(function (size, pos) {
        var value = styles['border-' + pos + '-width'];

        return size + pixelsToNumber(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var boxKeys = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var _iterator = boxKeys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var key = _ref;

        var value = styles['padding-' + key];

        paddings[key] = pixelsToNumber(value);
    }

    return paddings;
}

/**
 * Creates content rectangle based on the provided dimensions
 * and the top/left positions.
 *
 * @param {Number} width - Width of rectangle.
 * @param {Number} height - Height of rectangle.
 * @param {Number} top - Top position.
 * @param {Number} left - Left position.
 * @returns {ClientRect}
 */
function createContentRect(width, height, top, left) {
    return {
        width: width, height: height, top: top,
        right: width + left,
        bottom: height + top,
        left: left
    };
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGElement} target - Element whose content
 *      rectangle needs to be calculated.
 * @returns {ClientRect}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createContentRect(bbox.width, bbox.height, 0, 0);
}

/**
 * Calculates content rectangle of a root element.
 *
 * @returns {ClientRect}
 */
function getDocElementRect() {
    // Neither scroll[Width/Height] nor offset[Width/Height] can be used to
    // define content dimensions as they give inconsistent results across
    // different browsers. E.g. in the Internet Explorer 10 and lower value of
    // these properties can't be less than the client dimensions (same thing
    // with the "getBoundingClientRect" method). And Firefox has the same
    // behavior with its "scroll" properties.
    var styles = getStyles(document.documentElement);

    var width = pixelsToNumber(styles.width);
    var height = pixelsToNumber(styles.height);

    return createContentRect(width, height, 0, 0);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element whose content
 *      rectangle needs to be calculated.
 * @returns {ClientRect}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and detached
    // elements. Though elements with width & height properties less than 0.5 will
    // be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuerys' ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getStyles(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize getBoundingClientRect if only its' data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = pixelsToNumber(styles.width),
        height = pixelsToNumber(styles.height);

    // Width & height include paddings and borders
    // when 'border-box' box model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll bars
    // are the only difference between rounded dimensions + paddings and "client"
    // properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;

    // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives the
    // client width of 315px and for the width of 314.7px it may give 314px.
    // And it doesn't happen all the time. Such difference needs to be ignored.
    if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
    }

    if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
    }

    return createContentRect(width, height, paddings.top, paddings.left);
}

/**
 * Checks whether provided element is an instance of SVGElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {Boolean}
 */
function isSVGElement(target) {
    return target instanceof window.SVGElement;
}

/**
 * Checks whether provided element is a document element (root element of a document).
 *
 * @param {Element} target - Element to be checked.
 * @returns {Boolean}
 */
function isDocumentElement(target) {
    return target === document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element whose content rectangle
 *      needs to be calculated.
 * @returns {ClientRect}
 */
function getContentRect(target) {
    if (isSVGElement(target)) {
        return getSVGContentRect(target);
    }

    if (isDocumentElement(target)) {
        return getDocElementRect();
    }

    return getHTMLElementContentRect(target);
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of its' changes.
 */
var ResizeObservation = function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        classCallCheck(this, ResizeObservation);

        this.target = target;

        // Keeps reference to the last observed content rectangle.
        this._contentRect = emptyRect;

        // Broadcasted width of content rectangle.
        this.broadcastWidth = 0;

        // Broadcasted height of content rectangle.
        this.broadcastHeight = 0;
    }

    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {ClientRect} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function broadcastRect() {
        var rect = this._contentRect;

        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;

        return rect;
    };

    /**
     * Updates content rectangle and tells whether its' width or height properties
     * have changed since the last broadcast.
     *
     * @returns {Boolean}
     */
    ResizeObservation.prototype.isActive = function isActive() {
        var rect = getContentRect(this.target);

        this._contentRect = rect;

        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };

    return ResizeObservation;
}();

/**
 * Defines properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @param {Object} [descr = {}] - Properties descriptor.
 * @returns {Object} Target object.
 */
function defineProperties(target, props) {
    var descr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var descriptor = {
        configurable: descr.configurable || false,
        writable: descr.writable || false,
        enumerable: descr.enumerable || false
    };

    for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var key = _ref;

        descriptor.value = props[key];

        Object.defineProperty(target, key, descriptor);
    }

    return target;
}

var ResizeObserverEntry =
/**
 * Creates an instance of ResizeObserverEntry.
 *
 * @param {Element} target - Element that is being observed.
 * @param {ClientRect} rectData - Data of the elements' content rectangle.
 */
function ResizeObserverEntry(target, rectData) {
    classCallCheck(this, ResizeObserverEntry);

    // Content rectangle needs to be an instance of ClientRect if it's
    // available.
    var rectInterface = window.ClientRect || Object;
    var contentRect = Object.create(rectInterface.prototype);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineProperties(contentRect, rectData, { configurable: true });

    defineProperties(this, {
        target: target, contentRect: contentRect
    }, { configurable: true });
};

var ResizeObserver$2 = function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {Function} callback - Callback function that is invoked when one
     *      of the observed elements changes it's content rectangle.
     * @param {ResizeObsreverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} publicObserver - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserver(callback, controller, publicObserver) {
        classCallCheck(this, ResizeObserver);

        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }

        // Reference to the callback function.
        this._callback = callback;

        // Registry of ResizeObservation instances.
        this._targets = new Map();

        // Collection of resize observations that have detected changes in
        // dimensions of elements.
        this._activeTargets = [];

        // Reference to the associated ResizeObserverController.
        this._controller = controller;

        // Public ResizeObserver instance which will be passed to callback function.
        this._publicObserver = publicObserver;
    }

    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     */
    ResizeObserver.prototype.observe = function observe(target) {
        //  Throw the same errors as in a native implementation.
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        if (!(target instanceof Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        var targets = this._targets;

        // Do nothing if element is already being observed.
        if (targets.has(target)) {
            return;
        }

        // Register new ResizeObservation instance.
        targets.set(target, new ResizeObservation(target));

        // Add observer to controller if it hasn't been connected yet.
        if (!this._controller.isConnected(this)) {
            this._controller.connect(this);
        }

        // Update observations.
        this._controller.refresh();
    };

    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     */
    ResizeObserver.prototype.unobserve = function unobserve(target) {
        //  Throw the same errors as in a native implementation.
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        if (!(target instanceof Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        var targets = this._targets;

        // Do nothing if element is not being observed.
        if (!targets.has(target)) {
            return;
        }

        // Remove element and associated with it ResizeObsrvation instance from
        // registry.
        targets.delete(target);

        // Set back the initial state if there is nothing to observe.
        if (!targets.size) {
            this.disconnect();
        }
    };

    /**
     * Stops observing all elements and clears the observations list.
     */
    ResizeObserver.prototype.disconnect = function disconnect() {
        this.clearActive();
        this._targets.clear();
        this._controller.disconnect(this);
    };

    /**
     * Clears an array of previously collected active observations and collects
     * observation instances which associated element has changed its' content
     * rectangle.
     */
    ResizeObserver.prototype.gatherActive = function gatherActive() {
        this.clearActive();

        var activeTargets = this._activeTargets;

        this._targets.forEach(function (observation) {
            if (observation.isActive()) {
                activeTargets.push(observation);
            }
        });
    };

    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     */
    ResizeObserver.prototype.broadcastActive = function broadcastActive() {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }

        var observer = this._publicObserver;

        // Create ResizeObserverEntry instance for every active observation.
        var entries = this._activeTargets.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });

        this.clearActive();
        this._callback.call(observer, entries, observer);
    };

    /**
     * Clears the collection of pending/active observations.
     */
    ResizeObserver.prototype.clearActive = function clearActive() {
        this._activeTargets.splice(0);
    };

    /**
     * Tells whether observer has pending observations.
     *
     * @returns {Boolean}
     */
    ResizeObserver.prototype.hasActive = function hasActive() {
        return !!this._activeTargets.length;
    };

    return ResizeObserver;
}();

var ResizeObserverPolyfill = (function () {
    if (!isBrowser) {
        /* eslint-disable */
        var _ResizeObserver2 = function () {
            function _ResizeObserver2() {
                classCallCheck(this, _ResizeObserver2);
            }

            _ResizeObserver2.prototype.observe = function observe() {};

            _ResizeObserver2.prototype.unobserve = function unobserve() {};

            _ResizeObserver2.prototype.disconnect = function disconnect() {};

            return _ResizeObserver2;
        }();
        /* eslint-enable */
        _ResizeObserver2.continuousUpdates = false;

        return _ResizeObserver2;
    }

    // Controller that will be assigned to all instances of ResizeObserver.
    var controller = new ResizeObserverController();

    // Registry of the internal observers.
    var observers = new WeakMap();

    /**
     * ResizeObservers' "Proxy" class which is meant to hide private properties and
     * methods from public instances.
     *
     * Additionally implements the "continuousUpdates" static property accessor to
     * give control over the behavior of the ResizeObserverController instance.
     * Changes made to this property affect all future and existing observers.
     */
    var ResizeObserver = function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {Function} callback - Callback that is invoked when dimensions of
         *      one of the observed elements change.
         */
        function ResizeObserver(callback) {
            classCallCheck(this, ResizeObserver);

            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }

            // Create a new instance of the internal ResizeObserver.
            var observer = new ResizeObserver$2(callback, controller, this);

            // Register internal observer.
            observers.set(this, observer);
        }

        createClass(ResizeObserver, null, [{
            key: 'continuousUpdates',

            /**
             * Tells whether continuous updates are enabled.
             *
             * @returns {Boolean}
             */
            get: function get() {
                return controller.continuousUpdates;
            },

            /**
             * Enables or disables continuous updates.
             *
             * @param {Boolean} value - Whether to enable or disable continuous updates.
             */
            set: function set(value) {
                if (typeof value !== 'boolean') {
                    throw new TypeError('type of "continuousUpdates" value must be boolean.');
                }

                controller.continuousUpdates = value;
            }
        }]);
        return ResizeObserver;
    }();

    // Expose public methods of ResizeObserver.
    ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
            if (isBrowser) {
                var _observers$get;

                (_observers$get = observers.get(this))[method].apply(_observers$get, arguments);
            }
        };
    });

    return ResizeObserver;
})();

var ResizeObserver = ResizeObserverPolyfill;

// Export existing implementation if it's available.
if (typeof global$1.ResizeObserver === 'function') {
    ResizeObserver = global$1.ResizeObserver;
}

var ResizeObserver$1 = ResizeObserver;

return ResizeObserver$1;
})));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
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

},{"react":undefined}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LayoutContent = (function (_Component) {
  _inherits(LayoutContent, _Component);

  function LayoutContent() {
    _classCallCheck(this, LayoutContent);

    _get(Object.getPrototypeOf(LayoutContent.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(LayoutContent, [{
    key: "render",

    // componentDidMount() {
    //   console.log('LayoutContent');

    //   let pageHeight = document.body.offsetHeight;
    //   const navbar = document.getElementsByClassName('react-admin-fixed-layout-navbar')[0];
    //   let navbarHeight = navbar && navbar.offsetHeight || 0;
    //   const header = document.getElementsByClassName('react-admin-fixed-layout-header')[0];
    //   let headerHeight = header && header.offsetHeight || 0;
    //   const content = document.getElementsByClassName('react-admin-fixed-layout-content')[0];

    //   console.log('pageHeight', pageHeight);
    //   console.log('navbarHeight', navbarHeight);
    //   console.log('headerHeight', headerHeight);

    //   content.style.height = `${pageHeight - (navbarHeight + headerHeight)}px`;

    //   window.addEventListener('resize', () => {
    //     pageHeight = document.body.offsetHeight;
    //     navbarHeight = navbar && navbar.offsetHeight || 0;
    //     headerHeight = header && header.offsetHeight || 0;
    //     content.style.height = `${pageHeight - (navbarHeight + headerHeight)}px`;
    //   }, false);
    // }

    value: function render() {
      return _react2["default"].createElement(
        "section",
        { className: "react-admin-fixed-layout-content" },
        this.props.children
      );
    }
  }]);

  return LayoutContent;
})(_react.Component);

LayoutContent.propTypes = {
  children: _react2["default"].PropTypes.node
};

exports["default"] = LayoutContent;
module.exports = exports["default"];

},{"react":undefined}],9:[function(require,module,exports){
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

},{"react":undefined,"react-measure":5}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

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

},{"react":undefined}],11:[function(require,module,exports){
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

},{"react":undefined}],12:[function(require,module,exports){
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

},{"react":undefined}],13:[function(require,module,exports){
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

},{"react":undefined}],"react-admin-fixed-layout":[function(require,module,exports){
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

},{"./Body":7,"./Content":8,"./Header":9,"./Main":10,"./Menu":11,"./Navbar":12,"./Sidebar":13,"react":undefined}]},{},[]);
