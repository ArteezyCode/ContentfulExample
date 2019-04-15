import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Article from 'components/article';

class HomePage extends Component {
  componentDidMount() {
    const { fetchArticle } = this.props;

    fetchArticle('5D4jHBbG2nNqyx1WToBPTU');
  }

  render() {
    const {
      content: { article, loading },
    } = this.props;

    return loading ? (
      <Loader loading type="RevolvingDot" />
    ) : (
      <Article document={article} />
    );
  }
}

HomePage.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  content: PropTypes.object,
}

export default HomePage;
