import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';

export default function BalanceMobile({
  evoBalance,
  trxBalance,
  zaCoinBalance,
}) {
  return (
    <div className="tokens-wrapper mobile">
      <a href="/#" className="token-link mobile w-inline-block">
        <div className="icon-wrapper">
          <img
            src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/evo-icon-white.svg"
            alt=""
          />
        </div>
        <div className="token-amount">
          {accounting.formatNumber(evoBalance, 0, ',')}
        </div>
        <div className="token-tooltip">
          <div>EVO Balance</div>
          <div className="token-tooltip-arrow" />
        </div>
      </a>
      <a href="/#" className="token-link mobile w-inline-block">
        <div className="icon-wrapper tron">
          <img
            src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/tron-icon-white.svg"
            alt=""
          />
        </div>
        <div className="token-amount">
          {accounting.formatNumber(trxBalance, 0, ',')}
        </div>
        <div className="token-tooltip trx">
          <div>TRX Balance</div>
          <div className="token-tooltip-arrow" />
        </div>
      </a>
      <a href="/#" className="token-link mobile last w-inline-block">
        <div className="icon-wrapper za">
          <img
            src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/za-text-white.svg"
            alt=""
          />
        </div>
        <div className="token-amount">
          {accounting.formatNumber(zaCoinBalance, 0, ',')}
        </div>
        <div className="token-tooltip za">
          <div>ZA Coin Balance</div>
          <div className="token-tooltip-arrow" />
        </div>
      </a>
    </div>
  );
}

BalanceMobile.propTypes = {
  evoBalance: PropTypes.number,
  trxBalance: PropTypes.number,
  zaCoinBalance: PropTypes.number,
};
