import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './topic-page.css';
import Markdown from '../common/markdown';

export default class TopicPage extends Component {
  render() {
    const { markdownUrl, sectionUrl, sectionName } = this.props;

    return (
      <Fragment>
        <Link to={sectionUrl} className="topicPage_backLink">
          <i className="zmdi zmdi-chevron-left topicPage_backChevron"/>
          {sectionName}
        </Link>
        <Markdown markdownUrl={markdownUrl}/>
      </Fragment>
    );
  }
}
