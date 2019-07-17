import { put, takeLatest } from 'redux-saga/effects';

import { LOGIN } from './constants';
import { loginSuccess } from './actions';

export function* login() {
  try {
    yield put(loginSuccess());
  } catch (err) {
    console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appData() {
  yield takeLatest(LOGIN, login);
}
