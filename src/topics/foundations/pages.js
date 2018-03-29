import setUrl from './pages/set.md';
import setTheoryUrl from './pages/set-theory.md';
import TopicPage from '../topic-page';

export default [
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
];
