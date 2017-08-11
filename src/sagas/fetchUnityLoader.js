import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_UNITY_LOADER } from '../constants/action-types';
import {
  fetchUnityLoaderSuccess,
  fetchUnityLoaderFailure
} from '../actions';

const generateGameUrl = game => `http://localhost:3000/assets/games/${game}/Build/UnityLoader.js`;

function* fetchUnityLoader(action) {
  const { game } = action;

  try  {
    const url = generateGameUrl(game);
    const response = yield fetch(url);
    yield put(fetchUnityLoaderSuccess(response));
  } catch(error) {
    yield put(fetchUnityLoaderFailure(error))
  }
}

export default function* watchFetchUnityLoader() {
  yield takeLatest(FETCH_UNITY_LOADER, fetchUnityLoader);
}
