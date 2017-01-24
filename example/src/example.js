var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('react-admin-fixed-layout');

var App = React.createClass({
	render () {
		return (
			<Layout>
				<Layout.Navbar>
					<p>Navbar</p>
				</Layout.Navbar>

				<Layout.Body>
					<Layout.Menu>
						<p>Menu</p>
					</Layout.Menu>

					<Layout.Header>
						<p>Header</p>
					</Layout.Header>

					<Layout.Content>
						<Layout.Sidebar>
							<p>Sidebar</p>
						</Layout.Sidebar>

						<Layout.Main>
							<p>Main</p>
						</Layout.Main>
					</Layout.Content>
				</Layout.Body>
			</Layout>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
