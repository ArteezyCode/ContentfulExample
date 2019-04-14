import React from 'react';
import PropTypes from 'prop-types';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './article.css';

const Article = ({ document }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => children,
      [BLOCKS.QUOTE]: (node, children) => (
        <div className="quotation">{children}</div>
      ),
      [MARKS.BOLD]: (node, children) => (
        <span className="bold-title">{children}</span>
      ),
    },
  };

  const article = documentToReactComponents(
    document && document.fields.body,
    options,
  );

  return (
    <div
      className="article-wrapper"
      style={{
        backgroundImage: `url(${document.fields.background &&
          document.fields.background.fields.file.url})`,
      }}
    >
      <div className="rich-text-content">
        <h1>{document.fields.title}</h1>
        {article}
      </div>
    </div>
  );
};

Article.propTypes = {
  document: PropTypes.object,
};

export default Article;
