import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './common/scroll-to-top';
import Header from './common/header';
import Footer from './common/footer';
import notFoundUrl from './common/not-found.md';
import Markdown from './common/markdown';
import introductionUrl from './pages/introduction.md';
import TopicRoutes from './topics/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <main className="mainContent mainContent_noNav">
                  <Markdown markdownUrl={introductionUrl} />
                </main>
              )}
            />
            <Route component={TopicRoutes}/>
            <Route
              render={() => <Markdown markdownUrl={notFoundUrl} />}
            />
          </Switch>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;

// {/* <Route path="/components" component={Components} />
// <Route component={NotFound} /> */}


// <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <img src={wolframAlphaUrl} width="25px" alt="Wolfram|Alpha"/> View in Wolfram Alpha
//         <Markdown markdownUrl={introductionUrl} />
//       </div>

