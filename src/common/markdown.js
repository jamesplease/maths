import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { fetchDedupe } from "fetch-dedupe";
import Latex from "./latex";
import Link from './link';

export default class Markdown extends Component {
  render() {
    const { markdownText, className = '' } = this.state;

    if (!markdownText) {
      return null;
    }

    return (
      <ReactMarkdown
        source={markdownText}
        className={`${className} markdown`}
        renderers={{
          link: Link,
          code: Latex,
          inlineCode: Latex
        }}
      />
    );
  }

  state = {
    markdownText: null
  };

  componentDidMount() {
    this.fetchMarkdown();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.markdownUrl !== nextProps.markdownUrl) {
      this.fetchMarkdown(nextProps);
    }
  }

  fetchMarkdown = props => {
    const { markdownUrl } = props || this.props;

    fetchDedupe(markdownUrl, { responseType: "text" }).then(res => {
      this.setState({
        markdownText: res.data
      });
    });
  };
}