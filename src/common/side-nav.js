import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './side-nav.css';

export default class SideNav extends Component {
  render() {
    const {section} = this.props;

    const {topics = [], guides = []} = section;

    return (
      <nav className="sideNav">
        <ul className="sideNav_list">
          <li className="sideNav_listSection">
            <button className="sideNav_listSectionBtn">
              <span className="sideNav_emoji" role="img" aria-label="book">📖</span>
              Topics
              <i className="zmdi zmdi-chevron-down sideNav_openIndicator"/>
            </button>
            <ul className="sideNav_subList">
              {topics.map(topic => {
                return (
                  <li key={topic.name}  className="sideNav_subListItem">
                    <NavLink
                      activeClassName="sideNav_subListLink-active"
                      to={`/${section.sectionKey}${topic.url}`}
                      className="sideNav_subListLink">
                      {topic.name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="sideNav_listSection">
            <button className="sideNav_listSectionBtn">
              <span className="sideNav_emoji" role="img" aria-label="guide">💁‍♀️</span>
              Guides
              <i className="zmdi zmdi-chevron-down sideNav_openIndicator"/>
            </button>
            <ul className="sideNav_subList">
              {guides.map(guide => {
                return (
                  <li key={guide.name}  className="sideNav_subListItem">
                    <NavLink
                      activeClassName="sideNav_subListLink-active"
                      to={`/${section.sectionKey}${guide.url}`}
                      className="sideNav_subListLink">
                      {guide.name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}
