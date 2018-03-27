import React, { Component } from "react";
import { InlineMath, BlockMath } from 'react-katex';

export default class CodeHighlighter extends Component {
  render() {
    const { language, value, inline } = this.props;

    console.log('wat', language, value, inline);

    if (language !== 'latex') {
      return value;
    }

    const Math = inline ? InlineMath : BlockMath;

    return (
      <Math math={value} />
    );
  }
}