import React from 'react';
import Markdown from '../../common/markdown';
import landingPageUrl from './index.md';
import vectorUrl from './pages/vectors.md';
import TopicPage from '../topic-page';

export default {
  sectionKey: 'linear-algebra',
  sectionName: 'Linear Algebra',
  landingPageComponent: () => (<Markdown markdownUrl={landingPageUrl}/>),
  topics: [
    {
      name: 'Vector',
      url: '/vector',
      component: TopicPage,
      markdownUrl: vectorUrl
    }
  ],
  guides: []
};
