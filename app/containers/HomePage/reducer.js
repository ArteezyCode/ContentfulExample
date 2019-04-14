import Immutable from 'immutable';
import * as types from './constants';

const initialState = Immutable.fromJS({
  loading: true,
  article: null,
});

function landingReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLE_REQUEST: {
      return state.set('loading', true);
    }
    case types.FETCH_ARTICLE_SUCCESS: {
      return state.set('loading', false).set('article', action.payload);
    }
    case types.FETCH_ARTICLE_FAILURE: {
      return state.set('loading', false);
    }
    default: {
      return state;
    }
  }
}

export default landingReducer;
