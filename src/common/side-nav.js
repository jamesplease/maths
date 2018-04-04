import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './side-nav.css';

export default class SideNav extends Component {
  render() {
    console.log('hello', this.props);

    return (
      <nav className="sideNav">
        <ul className="sideNav_list">
          <li className="sideNav_listSection">
            <Link to="/">
              💁‍♀️
              Hello
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
