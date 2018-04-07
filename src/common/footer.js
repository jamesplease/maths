import React, { Component } from 'react';
import classnames from 'classnames';
import './footer.css';

export default class Footer extends Component {
  render() {
    const { noSideNav } = this.props;

    const footerClass = classnames('footer', {
      'footer-fullWidth': noSideNav
    });

    return (
      <footer className={footerClass}>
        Principia © 2018.
      </footer>
    );
  }
}
