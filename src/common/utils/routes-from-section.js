import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import DocumentTitle from 'react-document-title';
import SideNav from '../side-nav';
import Footer from '../footer';

function sectionWithNav(component, navProps) {
  return (
    <Fragment>
      <SideNav {...navProps}/>
      <main className="mainContent">
        {component}
      </main>
      <Footer />
    </Fragment>
  );
}

export default function routesFromSection(section, match) {
  const landingPageRoute = (
    <Route
        key={`${section.sectionName}-index`}
        exact
        path={`${match.path}/${section.sectionKey}`}
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
        path={`${match.path}/${section.sectionKey}${topic.url}`}
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