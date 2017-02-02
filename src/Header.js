import React, { Component } from 'react';
import Measure from 'react-measure';

function resizeElement({ addHeader = true }) {
  const navbar = document.getElementsByClassName('react-admin-fixed-layout-navbar')[0];
  const header = document.getElementsByClassName('react-admin-fixed-layout-header')[0];
  const content = document.getElementsByClassName('react-admin-fixed-layout-content')[0];

  const pageHeight = document.body.offsetHeight;
  const navbarHeight = navbar && navbar.offsetHeight || 0;
  const headerHeight = addHeader ? (header && header.offsetHeight || 0) : 0;
  content.style.height = `${pageHeight - (navbarHeight + headerHeight)}px`;
}

class LayoutHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {},
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      resizeElement({ addHeader: true })
    }, false);
  }

  componentWillUnmount() {
    resizeElement({ addHeader: false });
  }

  render() {
    const { height } = this.state.dimensions;
    if (height) {
      resizeElement({ addHeader: true });
    }

    return (
      <Measure onMeasure={(dimensions) => {
        this.setState({dimensions});
      }}>
        <header className="react-admin-fixed-layout-header">
          {this.props.children}
        </header>
      </Measure>
    );
  }
}

LayoutHeader.propTypes = {
  children: React.PropTypes.node,
};

export default LayoutHeader;
