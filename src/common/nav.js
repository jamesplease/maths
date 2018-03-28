import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
