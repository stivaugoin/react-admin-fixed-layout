import React from 'react';

const LayoutMenu = props => (
  <nav className="react-admin-fixed-layout-menu">
    {props.children}
  </nav>
);

LayoutMenu.propTypes = {
  children: React.PropTypes.node,
};

export default LayoutMenu;
