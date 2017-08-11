import { all, fork } from 'redux-saga/effects';
import watchFetchUnityLoader from './fetchUnityLoader';

export default function* root() {
  yield all([
    fork(watchFetchUnityLoader)
  ]);
}
