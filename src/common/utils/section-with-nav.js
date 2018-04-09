import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import DocumentTitle from 'react-document-title';
import SideNav from '../side-nav';
import Footer from '../footer';

export default function sectionWithNav(component, navProps) {
  return (
    <Fragment>
      <SideNav {...navProps}/>
      <main className="mainContent">
        {component}
      </main>
      <Footer />
    </Fragment>
  );
}