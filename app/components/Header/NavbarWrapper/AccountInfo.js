import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { walletAddressShorten } from 'utils/walletAddressShorten';

export default function AccountInfo({ accountName, accountAddress }) {
  return (
    <Link
      id="w-node-22521a87e932-1a87e8c5"
      to="/activity"
      className="account-button w-inline-block"
    >
      <div className="account-info-wrapper">
        <div className="account-name">{accountName}</div>
        <div className="account-name">
          {walletAddressShorten(accountAddress)}
        </div>
      </div>
      <img
        src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/avatar_1avatar.jpg"
        alt=""
        className="account-image"
      />
    </Link>
  );
}

AccountInfo.propTypes = {
  accountName: PropTypes.string,
  accountAddress: PropTypes.string,
};
