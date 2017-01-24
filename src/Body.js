import React from 'react';

const LayoutBody = props => (
  <section className="react-admin-fixed-layout-body">
    {props.children}
  </section>
);

LayoutBody.propTypes = {
  children: React.PropTypes.node,
};

export default LayoutBody;
