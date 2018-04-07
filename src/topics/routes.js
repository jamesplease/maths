import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import DocumentTitle from 'react-document-title';
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
  console.log('wat', section);
  const landingPageRoute = (
    <Route
        key={`${section.sectionName}-index`}
        exact
        path={`/${section.sectionKey}`}
        render={(props) => (
          <DocumentTitle title={`${section.sectionName} - Principia`}>
            {sectionWithNav(<section.landingPageComponent
              {...props}/>, {
                section,
                ...props
              })
            }
          </DocumentTitle>
        )}
      />
  );

  const topics = section.topics.map(topic => {
    return (
      <Route
        key={`${topic.name}-main`}
        exact
        path={`/${section.sectionKey}${topic.url}`}
        render={props => (
          <DocumentTitle title={`${topic.name} - Principia`}>
            {sectionWithNav(<topic.component
              {...props}
              {...topic}
              sectionUrl={`/${section.sectionKey}`}
              sectionName={section.sectionName} />, {
                section,
                ...props
              })}
          </DocumentTitle>
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
