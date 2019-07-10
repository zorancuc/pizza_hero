import React from 'react';
import { Link } from 'react-router-dom';

export default function AccountInfoMobile() {
  return (
    <Link to="/activity" className="account-button mobile w-inline-block">
      <img src="/avatar_1avatar.jpg" alt="" className="account-image" />
      <div className="account-info-wrapper">
        <div className="account-name">Elliot T. Wainman</div>
        <div className="account-number">(TVt3AG...)</div>
      </div>
    </Link>
  );
}
