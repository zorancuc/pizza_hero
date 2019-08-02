import { put, call, takeLatest, select } from 'redux-saga/effects';
import localforage from 'localforage';

import {
  LOGIN,
  LOGOUT,
  CHECK_TRONLINK_STATUS,
  GET_TRX_BALANCE,
} from './constants';
import {
  loginSuccess,
  logoutSuccess,
  checkTronlinkStatusSuccess,
  // getTrxBalanceSuccess,
  getTrxBalanceFail,
} from './actions';
import { makeSelectWalletAddress, makeSelectTronWeb } from './selectors';

export function* login() {
  try {
    yield put(loginSuccess());
  } catch (err) {
    console.log(err);
  }
}

function* logout() {
  try {
    localforage.removeItem('pizza_hero');
    yield put(logoutSuccess());
  } catch (err) {
    console.log(err);
  }
}

export function* checkTronlinkStatus() {
  try {
    const tronWebState = {
      installed: !!window.tronWeb,
      loggedIn: window.tronWeb && window.tronWeb.ready,
    };

    if (tronWebState.installed) {
      // this.setState({ tronWeb: tronWebState });
      console.log('TronLink Status');
      console.log(tronWebState);

      yield put(checkTronlinkStatusSuccess(tronWebState));
    }

    // let tries = 0;

    // const timer = setInterval(() => {
    //     if (tries >= 10) {
    //         const TRONGRID_API = 'https://api.trongrid.io';

    //         window.tronWeb = new TronWeb(
    //             TRONGRID_API,
    //             TRONGRID_API,
    //             TRONGRID_API
    //         );

    //         this.setState({
    //             tronWeb: {
    //                 installed: false,
    //                 loggedIn: false
    //             }
    //         });

    //         clearInterval(timer);
    //         return resolve();
    //     }

    //     tronWebState.installed = !!window.tronWeb;
    //     tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

    //     if (!tronWebState.installed) return tries++;

    //     // this.setState({ tronWeb: tronWebState });
    //     console.log("TronLink Status");
    //     console.log(tronWebState);

    //     resolve();
    // }, 100);
    yield put(loginSuccess());
  } catch (err) {
    console.log(err);
  }
}

export function* getTrxBalance() {
  try {
    const address = yield select(makeSelectWalletAddress());
    const tronWeb = yield select(makeSelectTronWeb());
    console.log('Address Saga');
    console.log(address);
    console.log(tronWeb.trx);
    const accountInfo = yield call(tronWeb.trx.getAccount, address);
    console.log(accountInfo);
    // const trxBalance = 1000;
    // yield put(getTrxBalanceSuccess(trxBalance));
  } catch (err) {
    console.log('FAILEDFAILED');
    yield put(getTrxBalanceFail(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appData() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(CHECK_TRONLINK_STATUS, checkTronlinkStatus);
  yield takeLatest(GET_TRX_BALANCE, getTrxBalance);
}
