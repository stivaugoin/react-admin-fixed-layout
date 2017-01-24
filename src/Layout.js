import React from 'react';

import LayoutBody from './Body';
import LayoutContent from './Content';
import LayoutHeader from './Header';
import LayoutMain from './Main';
import LayoutMenu from './Menu';
import LayoutNavbar from './Navbar';
import LayoutSidebar from './Sidebar';

const Layout = props => (
	<div className="react-admin-fixed-layout">
		{props.children}
	</div>
);

Layout.propTypes = {
	children: React.PropTypes.node.isRequired,
};

Layout.Body = LayoutBody;
Layout.Content = LayoutContent;
Layout.Header = LayoutHeader;
Layout.Main = LayoutMain;
Layout.Menu = LayoutMenu;
Layout.Navbar = LayoutNavbar;
Layout.Sidebar = LayoutSidebar;

export default Layout;
