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
import localforage from 'localforage';
import { auth, db } from 'utils/firebase';
import { smartContract, chest } from 'utils/tronsc';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MyInventory from 'containers/MyInventory';
import Activity from 'containers/Activity';
import Settings from 'containers/Settings';
import ViewItem from 'containers/ViewItem';
import SignupModal from 'components/SignupModal';
import LoginModal from 'components/LoginModal';
import PrivateRoute from 'components/PrivateRoute';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectIsOpenSignupModal,
  makeSelectIsOpenLoginModal,
  makeSelectTronWebState,
} from './selectors';
import {
  closeSignupModal,
  openLoginModal,
  closeLoginModal,
  updateTronlinkStatus,
  setWalletAddress,
  getTrxBalance,
  setTronWeb,
  getTrxBalanceSuccess,
  loginSuccess,
  getZACoinBalanceSuccess,
} from './actions';
import saga from './saga';

const key = 'global';
// const FOUNDATION_ADDRESS = 'TXWSjLQoCMB6CkEQf2y1wyeiUSBU7U5ekg';

function App({
  isOpenSignupModal,
  isOpenLoginModal,
  tronWebState,
  onSignup,
  onLogin,
  onCloseSignupModal,
  onOpenLoginModal,
  onCloseLoginModal,
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
      // return resolve();
      return 0;
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

    await smartContract.smartContract.setTronWeb(window.tronWeb);
    await chest.buyChest(10, 'TNRbh7ZWXNpymf8pcWexeKUh7EFefT6sZA', true, 50);
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
        onLogin={onOpenLoginModal}
      />
      <LoginModal
        isOpen={isOpenLoginModal}
        closeModal={onCloseLoginModal}
        onLogin={onLogin}
      />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute path="/my-inventory" component={MyInventory} />
        <PrivateRoute path="/activity" component={Activity} />
        <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/view-item" component={ViewItem} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  isOpenSignupModal: PropTypes.bool,
  isOpenLoginModal: PropTypes.bool,
  tronWebState: PropTypes.object,
  onCloseSignupModal: PropTypes.func,
  onSignup: PropTypes.func,
  onLogin: PropTypes.func,
  onOpenLoginModal: PropTypes.func,
  onCloseLoginModal: PropTypes.func,
  onUpdateTronlinkStatus: PropTypes.func,
  onSetWalletAddress: PropTypes.func,
  onGetTrxBalance: PropTypes.func,
  onSetTronWeb: PropTypes.func,
  onSetWalletBalance: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOpenSignupModal: makeSelectIsOpenSignupModal(),
  isOpenLoginModal: makeSelectIsOpenLoginModal(),
  tronWebState: makeSelectTronWebState(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSignup: form => {
      auth
        .doCreateUserWithEmailAndPassword(form.email, form.password)
        // it the above functions resolves, reset the state to its initial state values, otherwise, set the error object
        .then(authUser => {
          // creating a user in the database after the sign up through Firebase auth API
          console.log(authUser.user.uid);
          db.doCreateUser(authUser.user.uid, form.nickname, form.email)
            .then(() => {
              // this.setState({
              //   ...INITIAL_STATE
              // });
              // history.push(routes.HOME); // redirects to Home Page
              const user = {
                email: form.email,
                username: form.nickname,
              };

              localforage.setItem('pizza_hero', user).then(function() {
                dispatch(loginSuccess(user));
              });
            })
            .catch(error => {
              // this.setState(byPropKey("error", error));
              // this.timer(); // show alert message for some seconds
              console.log(error);
            });

          db.doSaveZACoin(authUser.user.uid, 100)
            .then(() => {
              console.log();
              dispatch(getZACoinBalanceSuccess(Number(100)));
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(err => {
          // this.setState(byPropKey("error", err));
          // this.timer(); // show alert message for some seconds
          console.log(err);
        });

      console.log(form);
    },
    onLogin: form => {
      console.log(form);
      auth
        .doSignInWithEmailAndPassword(form.email, form.password)
        .then(result => {
          console.log(result.user.uid);

          db.doGetAnUnser(result.user.uid).then(res => {
            const user = res.data();
            console.log(user);
            if (user && user.email && user.username) {
              localforage.setItem('pizza_hero', res.data()).then(function() {
                dispatch(loginSuccess(res.data()));
              });
            }
          });

          db.doGetZACoin(result.user.uid).then(res => {
            console.log(res.data());
            dispatch(getZACoinBalanceSuccess(Number(res.data().coin)));
          });
        })
        .catch(error => {
          // this.setState(byPropKey("error", error));
          // this.timer(); // show alert message for some seconds
          console.log(error);
        });
    },
    onOpenLoginModal: () => dispatch(openLoginModal()),
    onCloseLoginModal: () => dispatch(closeLoginModal()),
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
    onSetZACoinBalance: (evobalance, trxBalance) => {
      dispatch(getZACoinBalanceSuccess(evobalance, trxBalance));
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
