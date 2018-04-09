import React from 'react';
import { Switch, Route } from "react-router-dom";
import Markdown from '../common/markdown';
import indexPageUrl from './index.md';

export default (props) => {
  const {match} = props;

  return (
    <Switch>
      <Route exact path={`${match.path}`} render={() => (
        <main className="mainContent">
          <Markdown markdownUrl={indexPageUrl}/>
        </main>
      )}/>
    </Switch>
  );
}
