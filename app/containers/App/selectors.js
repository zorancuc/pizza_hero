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

const makeSelectIsOpenLoginModal = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isOpenLoginModal,
  );

const makeSelectEvoBalance = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.evoBalance,
  );

const makeSelectTrxBalance = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.trxBalance,
  );

const makeSelectTronWebState = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tronWebState,
  );

const makeSelectWalletAddress = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.walletAddress,
  );

const makeSelectAccountName = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.accountName,
  );

const makeSelectTronWeb = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tronWeb,
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectIsLogged,
  makeSelectIsOpenSignupModal,
  makeSelectIsOpenLoginModal,
  makeSelectEvoBalance,
  // makeSelectIsWalletLogged,
  makeSelectTronWebState,
  makeSelectWalletAddress,
  makeSelectAccountName,
  makeSelectTronWeb,
  makeSelectTrxBalance,
};
