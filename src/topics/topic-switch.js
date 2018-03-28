import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import notFoundUrl from "../common/not-found.md";
import Markdown from '../common/markdown';

export default class TopicRoutes extends Component {
  render() {
    const { topicUrl, match, pages, LandingPage, sectionName } = this.props;

    const baseUrl = `${match.url}${topicUrl}`;

    return (
      <Switch>
        <Route exact path={`${baseUrl}`} component={LandingPage} />
        {pages.map(page => {
          return (
            <Route
              key={`${page.name}-main`}
              exact
              path={`${baseUrl}${page.url}`}
              render={props => <page.component
                {...props}
                {...page}
                sectionUrl={baseUrl}
                sectionName={sectionName} />}
            />
          );
        })}
        <Route
          render={() => <Markdown markdownUrl={notFoundUrl} />}
        />
      </Switch>
    );
  }
}
