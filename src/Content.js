import React, { Component } from 'react';

class LayoutContent extends Component {
  componentDidMount() {
    let pageHeight = document.body.offsetHeight;
    const navbar = document.getElementsByClassName('react-admin-fixed-layout-navbar')[0];
    const navbarHeight = navbar && navbar.offsetHeight || 0;
    const header = document.getElementsByClassName('react-admin-fixed-layout-header')[0];
    const headerHeight = header && header.offsetHeight || 0;
    const content = document.getElementsByClassName('react-admin-fixed-layout-content')[0];
    content.style.height = `${pageHeight - (navbarHeight + headerHeight)}px`;

    window.addEventListener('resize', () => {
      pageHeight = document.body.offsetHeight;
      content.style.height = `${pageHeight - (navbarHeight + headerHeight)}px`;
    }, false);
  }

  render() {
    return (
      <section className="react-admin-fixed-layout-content">
        {this.props.children}
      </section>
    );
  }
}

LayoutContent.propTypes = {
  children: React.PropTypes.node,
};

export default LayoutContent;
