import React from 'react';
import { Link } from 'react-router-dom';

export default function AccountInfo() {
  return (
    <Link
      id="w-node-22521a87e932-1a87e8c5"
      to="/activity"
      className="account-button w-inline-block"
    >
      <div className="account-info-wrapper">
        <div className="account-name">Elliot T. Wainman</div>
        <div className="account-name">(TVt3AG...)</div>
      </div>
      <img src="/avatar_1avatar.jpg" alt="" className="account-image" />
    </Link>
  );
}
