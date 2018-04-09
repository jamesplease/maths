import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import './side-nav.css';

export default class SideNav extends Component {
  render() {
    const {section, rootUrl} = this.props;
    const { topicsOpen, guidesOpen } = this.state;

    const {topics = [], guides = []} = section;

    const topicsOpenIndicatorClass = classnames('zmdi zmdi-chevron-down sideNav_openIndicator', {
      'sideNav_openIndicator-closed': !topicsOpen
    });

    const guidesOpenIndicatorClass = classnames('zmdi zmdi-chevron-down sideNav_openIndicator', {
      'sideNav_openIndicator-closed': !guidesOpen
    });

    return (
      <nav className="sideNav">
        <ul className="sideNav_list">
          <li className="sideNav_listSection">
            <button
              className="sideNav_listSectionBtn"
              onClick={() => this.setState({ topicsOpen: !topicsOpen })}>
              <span className="sideNav_emoji" role="img" aria-label="book">📖</span>
              Topics
              <i className={topicsOpenIndicatorClass}/>
            </button>
            {topicsOpen && <ul className="sideNav_subList">
              {topics.map(topic => {
                return (
                  <li key={topic.name}  className="sideNav_subListItem">
                    <NavLink
                      activeClassName="sideNav_subListLink-active"
                      to={`${rootUrl}${topic.url}`}
                      className="sideNav_subListLink">
                      {topic.name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>}
          </li>
          <li className="sideNav_listSection">
            <button
              className="sideNav_listSectionBtn"
              onClick={() => this.setState({ guidesOpen: !guidesOpen })}>
              <span className="sideNav_emoji" role="img" aria-label="guide">💁‍♀️</span>
              Guides
              <i className={guidesOpenIndicatorClass}/>
            </button>
            {guidesOpen && <ul className="sideNav_subList">
              {guides.map(guide => {
                return (
                  <li key={guide.name}  className="sideNav_subListItem">
                    <NavLink
                      activeClassName="sideNav_subListLink-active"
                      to={`${rootUrl}${guide.url}`}
                      className="sideNav_subListLink">
                      {guide.name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>}
          </li>
        </ul>
      </nav>
    );
  }

  state = {
    topicsOpen: true,
    guidesOpen: true
  }
}
