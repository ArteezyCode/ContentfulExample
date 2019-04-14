import { takeEvery, call, put, all } from 'redux-saga/effects';
import ContentfulClient from 'utils/ContentfulClient';
import * as types from './constants';
import { fetchArticleSuccess, fetchArticleFailure } from './actions';

const contentfulClient = new ContentfulClient();

export function* fetchArticle({ payload }) {
  try {
    const homepage = yield call(contentfulClient.getEntry, payload);
    yield put(fetchArticleSuccess(homepage));
  } catch (error) {
    yield put(fetchArticleFailure(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(types.FETCH_ARTICLE_REQUEST, fetchArticle)]);
}
