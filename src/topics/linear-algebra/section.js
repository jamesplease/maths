import React from 'react';
import Markdown from '../../common/markdown';
import landingPageUrl from './index.md';
// import TopicPage from '../topic-page';

export default {
  sectionKey: 'linear-algebra',
  sectionName: 'Linear Algebra',
  landingPageComponent: () => (<Markdown markdownUrl={landingPageUrl}/>),
  topics: [],
  guides: []
};
