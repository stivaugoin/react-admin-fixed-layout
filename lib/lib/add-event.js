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