import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_listItem">
            <NavLink to="/math" className="nav_link">
              Mathematics
            </NavLink>
          </li>
          <li className="nav_listItem">
            <NavLink to="/physics" className="nav_link">
              Physics
            </NavLink>
          </li>
          <li className="nav_listItem">
            <NavLink to="/philosophy" className="nav_link">
              Philosophy
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
