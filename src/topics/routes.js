import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Markdown from '../common/markdown';
import foundationsSection from './foundations/section';
import linearAlgebraSection from './linear-algebra/section';

function routesFromSection(section, match) {
  const landingPageRoute = (
    <Route
        key={`${section.sectionName}-index`}
        exact
        path={`/${section.sectionKey}`}
        render={(props) => (
          <section.landingPageComponent
            {...props}
            pages={section.pages}/>
        )}
      />
  );

  const pages = section.pages.map(page => {
    return (
      <Route
        key={`${page.name}-main`}
        exact
        path={`/${section.sectionKey}${page.url}`}
        render={props => <page.component
          {...props}
          {...page}
          sectionUrl={`/${section.sectionKey}`}
          sectionName={section.sectionName} />}
      />
    );
  });

  return [
    landingPageRoute,
    ...pages
  ];
}

export default (props) => {
  const {match} = props;

  return (
    <Switch>
      {routesFromSection(foundationsSection, match)}
      {routesFromSection(linearAlgebraSection, match)}
    </Switch>
  );
}
