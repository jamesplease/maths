import React from 'react';
import { Switch, Route } from "react-router-dom";
import Markdown from '../common/markdown';
import indexPageUrl from './index.md';
import foundationsSection from './foundations/section';
import linearAlgebraSection from './linear-algebra/section';
import routesFromSection from '../common/utils/routes-from-section';

export default (props) => {
  const {match} = props;

  return (
    <Switch>
      <Route exact path={`${match.path}`} render={() => (
        <main className="mainContent">
          <Markdown markdownUrl={indexPageUrl}/>
        </main>
      )}/>
      {routesFromSection(foundationsSection, match)}
      {routesFromSection(linearAlgebraSection, match)}
    </Switch>
  );
}
