import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './topic-page.css';
import Markdown from '../common/markdown';

export default class LandingPage extends Component {
  render() {
    const { markdownUrl, pages, match } = this.props;

    return (
      <Fragment>
        <Markdown markdownUrl={markdownUrl}/>
        {pages.map(page => {
          return (
            <div key={page.name}>
              <Link
                to={`${match.path}${page.url}`}>
                {page.name}
              </Link>
            </div>
          )
        })}
      </Fragment>
    );
  }
}
