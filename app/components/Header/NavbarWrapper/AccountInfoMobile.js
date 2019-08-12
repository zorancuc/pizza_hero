import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { walletAddressShorten } from 'utils/walletAddressShorten';

export default function AccountInfoMobile({ accountName, accountAddress }) {
  return (
    <Link to="/activity" className="account-button mobile w-inline-block">
      <img
        src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/avatar_1avatar.jpg"
        alt=""
        className="account-image"
      />
      <div className="account-info-wrapper">
        <div className="account-name">{accountName}</div>
        <div className="account-number">
          {walletAddressShorten(accountAddress)}
        </div>
      </div>
    </Link>
  );
}

AccountInfoMobile.propTypes = {
  accountName: PropTypes.string,
  accountAddress: PropTypes.string,
};
