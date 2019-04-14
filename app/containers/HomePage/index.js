import { connect } from 'react-redux';
import { compose } from 'redux';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import Homepage from './homepage';
import { fetchArticleRequest } from './actions';

const mapDispatchToProps = {
  fetchArticle: fetchArticleRequest,
};

const mapStateToProps = state => ({
  content: state.get('homepage').toJS(),
});

const withReducer = injectReducer({ key: 'homepage', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'homepage',
  saga,
  mode: RESTART_ON_REMOUNT,
});

export default compose(
  withReducer,
  withConnect,
  withSaga,
)(Homepage);
