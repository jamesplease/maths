import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import SideNav from '../common/side-nav';
import Footer from '../common/footer';
import foundationsSection from './foundations/section';
import linearAlgebraSection from './linear-algebra/section';

function sectionWithNav(component, navProps) {
  return (
    <Fragment>
      <SideNav {...navProps}/>
      <main className="mainContent">
        {component}
      </main>
      <Footer />
    </Fragment>
  )
}

function routesFromSection(section) {
  const landingPageRoute = (
    <Route
        key={`${section.sectionName}-index`}
        exact
        path={`/${section.sectionKey}`}
        render={(props) => (
          sectionWithNav(<section.landingPageComponent
            {...props}/>, {
              section,
              ...props
            })
        )}
      />
  );

  const topics = section.topics.map(topics => {
    return (
      <Route
        key={`${topics.name}-main`}
        exact
        path={`/${section.sectionKey}${topics.url}`}
        render={props => (
          sectionWithNav(<topics.component
            {...props}
            {...topics}
            sectionUrl={`/${section.sectionKey}`}
            sectionName={section.sectionName} />, {
              section,
              ...props
            })
        )}
      />
    );
  });

  return [
    landingPageRoute,
    ...topics
  ];
}

export default (props) => {
  return (
    <Switch>
      {routesFromSection(foundationsSection)}
      {routesFromSection(linearAlgebraSection)}
    </Switch>
  );
}
