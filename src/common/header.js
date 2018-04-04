import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Nav from './nav';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header_title">
          <Link to="/" className="header_link">
            Principia
          </Link>
        </h1>
        <Nav />
      </header>
    );
  }
}
