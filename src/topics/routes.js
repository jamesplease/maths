import React from 'react';
import TopicSwitch from './topic-switch';
import foundationLandingUrl from './foundations/index.md';
import foundationPages from './foundations/pages';
import Markdown from '../common/markdown';

export default (props) => {

  return (
    <TopicSwitch
      {...props}
      sectionName="Foundations"
      key="foundations"
      topicUrl="foundations"
      pages={foundationPages}
      LandingPage={() => (<Markdown markdownUrl={foundationLandingUrl}/>)} />
  );
}
