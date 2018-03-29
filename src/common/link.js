import React from 'react';
import './link.css';

const anchor = document.createElement('a');

function getHostnameFromUrl(url) {
  anchor.href = url;
  return anchor.hostname;
}

export default ({ href, children }) => {
  const hostname = getHostnameFromUrl(href);

  if (hostname === 'en.wikipedia.org') {
    return (
      <a href={href} className="link_wikipediaLink">
        {children}
      </a>
    );
  }
  return (<a href={href}>{children}</a>);
}
