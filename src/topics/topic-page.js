import React, { Component, Fragment } from 'react';
import './topic-page.css';
import Markdown from '../common/markdown';

export default class TopicPage extends Component {
  render() {
    const { markdownUrl } = this.props;

    return (
      <Fragment>
        <Markdown markdownUrl={markdownUrl}/>
      </Fragment>
    );
  }
}
