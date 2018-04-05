import React, { Component } from 'react';
import './topic-page.css';
import Markdown from '../common/markdown';

export default class LandingPage extends Component {
  render() {
    const { markdownUrl } = this.props;

    return (
      <Markdown markdownUrl={markdownUrl}/>
    );
  }
}
