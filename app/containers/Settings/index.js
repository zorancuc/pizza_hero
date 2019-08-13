import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectWalletAddress,
  makeSelectAccountName,
} from 'containers/App/selectors';

import AccountForm from './components/AccountForm';
import Wallet from './components/Wallet';
import ReferralLink from './components/ReferralLink';

function Settings({ accountAddress }) {
  return (
    <div className="section settings-section">
      <div className="container">
        <h2 className="settings-tab">User Settings</h2>
        <div className="large-profile-image">
          <img
            src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/avatar_1avatar.jpg"
            alt=""
          />
        </div>
        <div className="settings-wrapper">
          <Wallet wallet={accountAddress} />
          <ReferralLink link="TVt3AGWGYVojpiBVhhttps://www.pizzaheroes.com/r?=TVt3AGWGYVojpiBVhqGJPGL93A63PJbYAHqGJPGL93A63PJbYAH" />
        </div>
        <AccountForm />
      </div>
    </div>
  );
}

Settings.propTypes = {
  // accountName: PropTypes.string,
  accountAddress: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  accountAddress: makeSelectWalletAddress(),
  accountName: makeSelectAccountName(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Settings);
