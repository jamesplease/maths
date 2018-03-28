import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_listItem">
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
          </li>
          <li className="nav_listItem">
            <NavLink to="/foundations" className="nav_link">
              Foundations
            </NavLink>
            <ul className="nav_subNav">
              <li className="nav_subNavItem">
                <NavLink to="/foundations/sets">
                  Sets
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav_listItem">
            <NavLink to="/linear-algebra" className="nav_link">
              Linear Algebra
            </NavLink>
            <ul className="nav_subNav">
              <li className="nav_subNavItem">
                <NavLink to="/linear-algebra/vector-space">
                  Vector Space
                </NavLink>
              </li>
              <li className="nav_subNavItem">
                <NavLink to="/linear-algebra/vector-space">
                  Vector
                </NavLink>
              </li>
              <li className="nav_subNavItem">
                <NavLink to="/linear-algebra/vector-space">
                  Matrix
                </NavLink>
              </li>
              <li className="nav_subNavItem">
                <NavLink to="/linear-algebra/vector-space">
                  Inner Product
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}
