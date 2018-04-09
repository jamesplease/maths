import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import ScrollToTop from './common/scroll-to-top';
import Header from './common/header';
import Nav from './common/nav';
import Footer from './common/footer';
import notFoundUrl from './common/not-found.md';
import Markdown from './common/markdown';
import Introduction from './pages/introduction';
import MathRoutes from './math/routes';
import PhysicsRoutes from './physics/routes';
import PhilosophyRoutes from './philosophy/routes';

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
                      <Introduction/>
                    </main>
                    <Footer noSideNav />
                  </Fragment>
                )}
              />
              <Route path="/math" component={MathRoutes}/>
              <Route path="/physics" component={PhysicsRoutes}/>
              <Route path="/philosophy" component={PhilosophyRoutes}/>
              <Route
                render={() => <Markdown markdownUrl={notFoundUrl} />}
              />
            </Switch>
            <Nav isBottom/>
          </ScrollToTop>
        </BrowserRouter>
      </DocumentTitle>
    );
  }
}

export default App;
