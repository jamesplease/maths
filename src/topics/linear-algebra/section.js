import React from 'react';
import Markdown from '../../common/markdown';
import landingPageUrl from './index.md';
// import TopicPage from '../topic-page';

export default {
  sectionKey: 'linear-algebra',
  sectionName: 'Linear Algebra',
  landingPageComponent: () => (<Markdown markdownUrl={landingPageUrl}/>),
  pages: [
    // {
    //   name: 'Sets',
    //   url: '/sets',
    //   component: TopicPage,
    //   markdownUrl: setUrl
    // },
    // {
    //   name: 'Set Theory',
    //   url: '/set-theory',
    //   component: TopicPage,
    //   markdownUrl: setTheoryUrl
    // }
  ]
};
