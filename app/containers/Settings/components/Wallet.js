import React from 'react';
import PropTypes from 'prop-types';

export default function Wallet({ wallet }) {
  return (
    <div className="setting">
      <div className="setting-title">Your Tron Wallet</div>
      <div className="copy-wrapper">
        <div className="copy-text">{wallet}</div>
        <a href="/#" className="copy-button w-inline-block">
          <div>copy</div>
        </a>
        <div className="link-overlay-color" />
      </div>
    </div>
  );
}

Wallet.propTypes = {
  wallet: PropTypes.string,
};
