import React from 'react';

const LayoutHeader = props => (
  <header className="react-admin-fixed-layout-header">
    {props.children}
  </header>
);

LayoutHeader.propTypes = {
  children: React.PropTypes.node,
};

export default LayoutHeader;
