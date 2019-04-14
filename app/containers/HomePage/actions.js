import * as types from './constants';

export const fetchArticleRequest = payload => ({
  type: types.FETCH_ARTICLE_REQUEST,
  payload,
});

export const fetchArticleSuccess = payload => ({
  type: types.FETCH_ARTICLE_SUCCESS,
  payload,
});

export const fetchArticleFailure = payload => ({
  type: types.FETCH_ARTICLE_FAILUER,
  payload,
});
