import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { fetchDedupe } from "fetch-dedupe";
import Latex from "./latex";

export default class Markdown extends Component {
  render() {
    const { markdownText } = this.state;

    if (!markdownText) {
      return null;
    }

    return (
      <ReactMarkdown
        source={markdownText}
        className="markdown"
        renderers={{
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