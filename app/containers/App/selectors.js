/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectIsLogged = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isLogged,
  );

const makeSelectIsOpenSignupModal = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isOpenSignupModal,
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectIsLogged,
  makeSelectIsOpenSignupModal,
};
