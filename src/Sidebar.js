import React from 'react';

const LayoutSidebar = props => (
  <aside className="react-admin-fixed-layout-sidebar">
    {props.children}
  </aside>
);

LayoutSidebar.propTypes = {
  children: React.PropTypes.node
};

export default LayoutSidebar;
