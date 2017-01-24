import React from 'react';

const LayoutNavbar = props => (
  <header className="react-admin-fixed-layout-navbar">
    {props.children}
  </header>
);

LayoutNavbar.propTypes = {
  children: React.PropTypes.node,
};

export default LayoutNavbar;
