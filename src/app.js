import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
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
      <DocumentTitle title="Principia">
        <BrowserRouter>
          <ScrollToTop>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <main className="mainContent mainContent_noNav">
                      <Markdown markdownUrl={introductionUrl} />
                    </main>
                    <Footer noSideNav />
                  </Fragment>
                )}
              />
              <Route component={TopicRoutes}/>
              <Route
                render={() => <Markdown markdownUrl={notFoundUrl} />}
              />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </DocumentTitle>
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

