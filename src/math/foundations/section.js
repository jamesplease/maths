import React from 'react';
import landingPageUrl from './index.md';
import Markdown from '../../common/markdown';
import setUrl from './pages/set.md';
import setTheoryUrl from './pages/set-theory.md';
import imaginaryNumbersUrl from './pages/imaginary-numbers.md';
import TopicPage from '../topic-page';

export default {
  sectionKey: 'foundations',
  sectionName: 'Mathematics',
  landingPageComponent: () => (<Markdown markdownUrl={landingPageUrl}/>),
  topics: [
    {
      name: 'Set',
      url: '/set',
      component: TopicPage,
      markdownUrl: setUrl
    },
    {
      name: 'Set Theory',
      url: '/set-theory',
      component: TopicPage,
      markdownUrl: setTheoryUrl
    },
    {
      name: 'Imaginary Number',
      url: '/imaginary-number',
      component: TopicPage,
      markdownUrl: imaginaryNumbersUrl
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
