import React from 'react';
import landingPageUrl from './index.md';
import setUrl from './pages/set.md';
import setTheoryUrl from './pages/set-theory.md';
import TopicPage from '../topic-page';
import LandingPage from '../landing-page';

export default {
  sectionKey: 'foundations',
  sectionName: 'Foundations of Mathematics',
  landingPageComponent: (props) => (
    <LandingPage
      markdownUrl={landingPageUrl}
      {...props}/>),
  pages: [
    {
      name: 'Sets',
      url: '/sets',
      component: TopicPage,
      markdownUrl: setUrl
    },
    {
      name: 'Set Theory',
      url: '/set-theory',
      component: TopicPage,
      markdownUrl: setTheoryUrl
    }
  ],
  topics: [
    {
      name: 'Sets',
      url: '/sets',
      component: TopicPage,
      markdownUrl: setUrl
    },
    {
      name: 'Set Theory',
      url: '/set-theory',
      component: TopicPage,
      markdownUrl: setTheoryUrl
    }
  ],
  guides: [
    {
      name: 'An Introduction to Sets',
      url: '/an-introduction-to-sets',
      component: TopicPage,
      markdownUrl: setUrl
    },
    {
      name: 'The Problems with Naive Set Theory',
      url: '/problems-with-set-theory',
      component: TopicPage,
      markdownUrl: setTheoryUrl
    }
  ]
};
