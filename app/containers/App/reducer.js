/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOGIN_SUCCESS,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNUP_MODAL,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  isLogged: false,
  isOpenSignupModal: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.isLogged = true;
        draft.isOpenSignupModal = false;
        break;
      case OPEN_SIGNUP_MODAL:
        draft.isOpenSignupModal = true;
        break;
      case CLOSE_SIGNUP_MODAL:
        draft.isOpenSignupModal = false;
        break;
    }
  });

export default appReducer;
