import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Markdown from '../common/markdown';
import foundationsSection from './foundations/section';

// import TopicSwitch from './topic-switch';
// import foundationLandingUrl from './foundations/index.md';
// import foundationPages from './foundations/pages';
// import linearAlgebraLandingUrl from './linear-algebra/index.md';
// import linearAlgebraPages from './linear-algebra/pages';

function routesFromSection(section, match) {
    return section.pages.map(page => {
      console.log('hello', `${section.sectionKey}${page.url}`, match)
      return (
        <Route
          key={`${page.name}-main`}
          exact
          path={`${section.sectionKey}${page.url}`}
          render={props => <page.component
            {...props}
            {...page}
            sectionUrl={section.sectionKey}
            sectionName={section.sectionName} />}
        />
      );
    });
}

export default (props) => {
  const {match} = props;

  return (
    <Switch>
      {routesFromSection(foundationsSection, match)}
    </Switch>
  );
}

// console.log <Fragment>
//       <TopicSwitch
//         {...props}
//         sectionName="Foundations"
//         key="foundations"
//         topicUrl="foundations"
//         pages={foundationPages}
//         LandingPage={() => (<Markdown markdownUrl={foundationLandingUrl}/>)} />
//       <TopicSwitch
//         {...props}
//         sectionName="Linear Algebra"
//         key="linear-algebra"
//         topicUrl="linear-algebra"
//         pages={linearAlgebraPages}
//         LandingPage={() => (<Markdown markdownUrl={linearAlgebraLandingUrl}/>)} />
//     </Fragment>