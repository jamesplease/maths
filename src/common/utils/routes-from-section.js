import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import DocumentTitle from 'react-document-title';
import SideNav from '../side-nav';
import Footer from '../footer';
import sectionWithNav from './section-with-nav';

export default function routesFromSection(section, match) {
  // const rootUrl = `${match.path}/${section.sectionKey}`;
  const rootUrl = `${match.path}`;

  const landingPageRoute = (
    <Route
      key={`${section.sectionName}-index`}
      exact
      path={rootUrl}
      render={(props) => (
        <DocumentTitle title={`${section.sectionName} - Principia`}>
          {sectionWithNav(<section.landingPageComponent
            {...props}/>, {
              section,
              rootUrl,
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
        path={`${rootUrl}${topic.url}`}
        render={props => (
          <DocumentTitle title={`${topic.name} - Principia`}>
            {sectionWithNav(<topic.component
              {...props}
              {...topic}
              sectionUrl={`/${section.sectionKey}`}
              sectionName={section.sectionName} />, {
                section,
                rootUrl,
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