import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <section className="hero-section">
        <span className="hero-emoji">
          👋
        </span>
        <h1 className="hero-heading">
          Welcome to Principia.
        </h1>
        <p className="hero-paragraph">
        Principia is a <i>free</i> reference site for subjects
        in math and science.
        </p>
        <button className="hero-button">
          Learn More
        </button>
      </section>
    );
  }
}
