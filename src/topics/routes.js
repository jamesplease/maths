import React, { Fragment } from 'react';
import Markdown from '../common/markdown';
import TopicSwitch from './topic-switch';
import foundationLandingUrl from './foundations/index.md';
import foundationPages from './foundations/pages';
import linearAlgebraLandingUrl from './linear-algebra/index.md';
import linearAlgebraPages from './linear-algebra/pages';

export default (props) => {

  return (
    <Fragment>
      <TopicSwitch
        {...props}
        sectionName="Foundations"
        key="foundations"
        topicUrl="foundations"
        pages={foundationPages}
        LandingPage={() => (<Markdown markdownUrl={foundationLandingUrl}/>)} />
      <TopicSwitch
        {...props}
        sectionName="Linear Algebra"
        key="linear-algebra"
        topicUrl="linear-algebra"
        pages={linearAlgebraPages}
        LandingPage={() => (<Markdown markdownUrl={linearAlgebraLandingUrl}/>)} />
    </Fragment>
    
  );
}
