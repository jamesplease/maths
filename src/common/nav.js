import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import './nav.css';

const navItems = [
  {
    key: 'math',
    label: 'Mathematics',
    icon: 'zmdi-shape'
  },
  {
    key: 'physics',
    label: 'Physics',
    icon: 'zmdi-globe'
  },
  {
    key: 'philosophy',
    label: 'Philosophy',
    icon: 'zmdi-balance'
  },
  // Maybe? If not here, where else?
  // {
  //   key: 'about',
  //   label: 'About',
  //   icon: 'zmdi-info-outline'
  // }
];

export default class Nav extends Component {
  render() {
    const { isBottom } = this.props;

    const className = classnames('nav', {
      'nav_bottom': isBottom
    });

    const linkClass = classnames('nav_link', {
      'nav_link-bottomLink': isBottom
    });

    return (
      <nav className={className}>
        <ul className="nav_list">
          {navItems.map(navItem => (
            <li className="nav_listItem" key={navItem.key}>
              <NavLink to={`/${navItem.key}`} className={linkClass}>
                <i className={`zmdi ${navItem.icon} nav_linkIcon`} />
                {navItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
