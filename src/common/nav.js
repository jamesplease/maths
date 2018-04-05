import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_listItem">
            <NavLink to="/foundations" className="nav_link">
              Foundations
            </NavLink>
          </li>
          <li className="nav_listItem">
            <NavLink to="/linear-algebra" className="nav_link">
              Linear Algebra
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
