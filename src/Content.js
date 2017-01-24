import React, { Component } from 'react';
import addEvent from './lib/add-event';

class LayoutContent extends Component {
  componentDidMount() {
    let pageHeight = document.body.offsetHeight;
    const navbarHeight = document.getElementsByClassName('react-admin-fixed-layout-navbar')[0].offsetHeight || 0;
    const headerHeight = document.getElementsByClassName('react-admin-fixed-layout-header')[0].offsetHeight || 0;
    const content = document.getElementsByClassName('react-admin-fixed-layout-content')[0];
    content.style.height = `${pageHeight - (navbarHeight + headerHeight)}px`;

    addEvent(window, 'resize', function () {
      pageHeight = document.body.offsetHeight;
      content.style.height = `${pageHeight - (navbarHeight + headerHeight)}px`;
    });
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
