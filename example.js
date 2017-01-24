require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('react-admin-fixed-layout');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			Layout,
			null,
			React.createElement(
				Layout.Navbar,
				null,
				React.createElement(
					'p',
					null,
					'Navbar'
				)
			),
			React.createElement(
				Layout.Body,
				null,
				React.createElement(
					Layout.Menu,
					null,
					React.createElement(
						'p',
						null,
						'Menu'
					)
				),
				React.createElement(
					Layout.Header,
					null,
					React.createElement(
						'p',
						null,
						'Header'
					)
				),
				React.createElement(
					Layout.Content,
					null,
					React.createElement(
						Layout.Sidebar,
						null,
						React.createElement(
							'p',
							null,
							'Sidebar'
						)
					),
					React.createElement(
						Layout.Main,
						null,
						React.createElement(
							'p',
							null,
							'Main'
						)
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-admin-fixed-layout":undefined,"react-dom":undefined}]},{},[1]);
