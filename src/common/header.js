import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="contents">
            <h1 className="header_title">
              <Link to="/" className="header_link">
                Maths
              </Link>
            </h1>
        </div>
      </header>
    );
  }
}
