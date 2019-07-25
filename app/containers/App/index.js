/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MyInventory from 'containers/MyInventory';
import Activity from 'containers/Activity';
import Settings from 'containers/Settings';
import ViewItem from 'containers/ViewItem';
import SignupModal from 'components/SignupModal';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectIsOpenSignupModal,
  makeSelectTronWebState,
} from './selectors';
import {
  closeSignupModal,
  login,
  updateTronlinkStatus,
  setWalletAddress,
  getTrxBalance,
  setTronWeb,
  getTrxBalanceSuccess,
} from './actions';
import saga from './saga';

const key = 'global';
// const FOUNDATION_ADDRESS = 'TXWSjLQoCMB6CkEQf2y1wyeiUSBU7U5ekg';

function App({
  isOpenSignupModal,
  tronWebState,
  onCloseSignupModal,
  onSignup,
  onUpdateTronlinkStatus,
  onSetWalletAddress,
  onGetTrxBalance,
  onSetTronWeb,
  onSetWalletBalance,
}) {
  useInjectSaga({ key, saga });

  const getAccountInfo = async address => {
    const accountInfo = await window.tronWeb.trx.getAccount(address);
    console.log(accountInfo);
    let evoBalance = 0;
    if (accountInfo.assetV2)
      evoBalance = window.tronWeb.fromSun(accountInfo.assetV2[0].value);
    const trxBalance = window.tronWeb.fromSun(accountInfo.balance);
    onSetWalletBalance(Number(evoBalance), Number(trxBalance));
    console.log('TronWeb Test');
  };

  const process = async () => {
    await new Promise(resolve => {
      const tmpTronWebState = {
        installed: !!window.tronWeb,
        loggedIn: window.tronWeb && window.tronWeb.ready,
      };
      console.log('OKOK');
      console.log(tmpTronWebState);
      if (tmpTronWebState.installed) {
        // this.setState({ tronWeb: tronWebState });
        onUpdateTronlinkStatus(tmpTronWebState);
        onSetTronWeb(window.tronWeb);
        onSetWalletAddress(window.tronWeb.defaultAddress.base58);
        getAccountInfo(window.tronWeb.defaultAddress.base58);
        console.log('TronLink Status123');
        console.log(tmpTronWebState);
        console.log(window.tronWeb);
        return resolve();
      }

      let tries = 0;

      const timer = setInterval(() => {
        if (tries >= 10) {
          const TRONGRID_API = 'https://api.trongrid.io';

          // eslint-disable-next-line no-undef
          window.tronWeb = new TronWeb(
            TRONGRID_API,
            TRONGRID_API,
            TRONGRID_API,
          );

          tmpTronWebState.installed = false;
          tmpTronWebState.loggedIn = false;

          onUpdateTronlinkStatus(tmpTronWebState);
          onSetTronWeb(window.tronWeb);
          console.log(window.tronWeb.defaultAddress.base58);
          onSetWalletAddress(window.tronWeb.defaultAddress.base58);
          getAccountInfo(window.tronWeb.defaultAddress.base58);
          clearInterval(timer);
          return resolve();
        }

        tmpTronWebState.installed = !!window.tronWeb;
        tmpTronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

        // eslint-disable-next-line no-plusplus
        if (!tmpTronWebState.installed) return tries++;

        // this.setState({ tronWeb: tronWebState });
        onUpdateTronlinkStatus(tmpTronWebState);
        onSetTronWeb(window.tronWeb);
        onSetWalletAddress(window.tronWeb.defaultAddress.base58);
        getAccountInfo(window.tronWeb.defaultAddress.base58);
        console.log('TronLink Status OKOKOK');
        console.log(tmpTronWebState);
        clearInterval(timer);
        return resolve();
      }, 1000);
      return resolve();
    });

    console.log('Logged in');
    console.log(tronWebState.loggedIn);
    if (!tronWebState.loggedIn) {
      console.log('Logged IN and In');
      // Set default address (foundation address) used for contract calls Directly
      // overwrites the address object as TronLink disabled the function call
      // window.tronWeb.defaultAddress = {
      //   hex: window.tronWeb.address.toHex(FOUNDATION_ADDRESS),
      //   base58: FOUNDATION_ADDRESS,
      // };

      window.tronWeb.on('addressChanged', result => {
        onSetWalletAddress(result.base58);
        getAccountInfo(result.base58);
        if (tronWebState.loggedIn) return;

        onGetTrxBalance();
        onUpdateTronlinkStatus(tronWebState);
      });
    }
  };

  useEffect(() => {
    console.log('Did mount');
    process();
  }, []);

  return (
    <div>
      <Helmet titleTemplate="%s - Pizza Heroes" defaultTitle="Pizza Heroes">
        <meta name="description" content="Pizza Heroes application" />
      </Helmet>
      <SignupModal
        isOpen={isOpenSignupModal}
        closeSignupModal={onCloseSignupModal}
        onSignup={onSignup}
      />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/my-inventory" component={MyInventory} />
        <Route path="/activity" component={Activity} />
        <Route path="/settings" component={Settings} />
        <Route path="/view-item" component={ViewItem} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  isOpenSignupModal: PropTypes.bool,
  tronWebState: PropTypes.object,
  onCloseSignupModal: PropTypes.func,
  onSignup: PropTypes.func,
  onUpdateTronlinkStatus: PropTypes.func,
  onSetWalletAddress: PropTypes.func,
  onGetTrxBalance: PropTypes.func,
  onSetTronWeb: PropTypes.func,
  onSetWalletBalance: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOpenSignupModal: makeSelectIsOpenSignupModal(),
  tronWebState: makeSelectTronWebState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSignup: form => {
      console.log(form);
      dispatch(login());
    },
    onCloseSignupModal: e => {
      if (e) e.preventDefault();
      dispatch(closeSignupModal());
    },
    onUpdateTronlinkStatus: tronWebState => {
      dispatch(updateTronlinkStatus(tronWebState));
    },
    onSetWalletAddress: walletAddress => {
      dispatch(setWalletAddress(walletAddress));
    },
    onGetTrxBalance: () => {
      dispatch(getTrxBalance());
    },
    onSetTronWeb: tronWeb => {
      dispatch(setTronWeb(tronWeb));
    },
    onSetWalletBalance: (evobalance, trxBalance) => {
      dispatch(getTrxBalanceSuccess(evobalance, trxBalance));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
