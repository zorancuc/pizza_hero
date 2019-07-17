/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo } from 'react';
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
import { makeSelectIsOpenSignupModal } from './selectors';
import { closeSignupModal, login } from './actions';
import saga from './saga';

const key = 'global';

function App({ isOpenSignupModal, onCloseSignupModal, onSignup }) {
  useInjectSaga({ key, saga });
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
  onCloseSignupModal: PropTypes.func,
  onSignup: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isOpenSignupModal: makeSelectIsOpenSignupModal(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSignup: e => {
      e.preventDefault();
      dispatch(login());
    },
    onCloseSignupModal: e => {
      e.preventDefault();
      dispatch(closeSignupModal());
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
