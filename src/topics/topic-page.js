import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Markdown from '../common/markdown';

export default class TopicPage extends Component {
  render() {
    const { markdownUrl, sectionUrl, sectionName } = this.props;

    return (
      <Fragment>
        <Link to={sectionUrl}>
          {sectionName}
        </Link>
        <Markdown markdownUrl={markdownUrl}/>
      </Fragment>
    );
  }
}
