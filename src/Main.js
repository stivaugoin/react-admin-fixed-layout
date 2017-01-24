import React from 'react';

const LayoutMain = props => (
  <main className="react-admin-fixed-layout-main">
    {props.children}
  </main>
);

LayoutMain.propTypes = {
  children: React.PropTypes.node,
  noScroll: React.PropTypes.bool,
};

export default LayoutMain;
