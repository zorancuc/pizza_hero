import React from 'react';
import AccountForm from './components/AccountForm';
import Wallet from './components/Wallet';
import ReferralLink from './components/ReferralLink';

export default function Settings() {
  return (
    <div className="section settings-section">
      <div className="container">
        <h2 className="settings-tab">User Settings</h2>
        <div className="large-profile-image">
          <img src="/avatar_1avatar.jpg" alt="" />
        </div>
        <div className="settings-wrapper">
          <Wallet wallet="TVt3AGWGYVojpiBVhqGJPGL93A63PJbYAH" />
          <ReferralLink link="TVt3AGWGYVojpiBVhhttps://www.pizzaheroes.com/r?=TVt3AGWGYVojpiBVhqGJPGL93A63PJbYAHqGJPGL93A63PJbYAH" />
        </div>
        <AccountForm />
      </div>
    </div>
  );
}
