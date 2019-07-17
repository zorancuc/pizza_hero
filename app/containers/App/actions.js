/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNUP_MODAL,
  LOGIN_SUCCESS,
} from './constants';

export function login() {
  return { type: LOGIN };
}
export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function openSignupModal() {
  return { type: OPEN_SIGNUP_MODAL };
}
export function closeSignupModal() {
  return { type: CLOSE_SIGNUP_MODAL };
}
