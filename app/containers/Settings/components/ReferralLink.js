import React from 'react';
import PropTypes from 'prop-types';

export default function ReferralLink({ link }) {
  return (
    <div className="setting last">
      <div className="setting-title">Your Referral Link</div>
      <div className="copy-wrapper">
        <div className="copy-text">{link}</div>
        <a href="/#" className="copy-button w-inline-block">
          <div className="text-block-13">copy</div>
        </a>
        <div className="link-overlay-color" />
      </div>
    </div>
  );
}

ReferralLink.propTypes = {
  link: PropTypes.string,
};
