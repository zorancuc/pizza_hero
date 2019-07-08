import React from 'react';

import './prize-total.scss';

export default function FriendRefferal() {
  return (
    <div
      data-w-id="d7a61ff6-901e-efec-c7eb-a30e9e632553"
      className="refer-a-friend-wrapper"
    >
      <a href="/#" className="refer-a-friend-tab w-inline-block">
        <img
          src="/add-friends-icon.svg"
          width="47"
          alt=""
          className="add-friends-icon-copy"
        />
      </a>
      <div
        data-w-id="d7a61ff6-901e-efec-c7eb-a30e9e632556"
        className="refer-a-friend-menu"
      >
        <a href="/#" className="close-refer-a-friend-menu w-inline-block">
          <img src="/close.svg" width="15" alt="" />
        </a>
        <div className="refer-a-friend-content-wrapper">
          <div className="share-your-referral-link">
            Share your referral link and receive 10% of all sales from their
            purchase.
          </div>
          <div className="your-referral-link">your referral link:</div>
          <div className="referral-link-wrapper">
            <img src="/link.svg" width="15" alt="" className="image" />
            <div className="referral-link">
              https://blockbears.io/purchase?r=5NST612897be1
            </div>
            <a href="/#" className="copy-referral-link-button w-inline-block">
              <div>copy</div>
            </a>
            <div className="link-overlay" />
          </div>
          <div className="total-referrals-wrapper">
            <div className="total-referrals">total referrals:</div>
            <div className="total-referrals-number">4</div>
          </div>
          <div className="total-earned-wrapper">
            <img src="/tron-gold.svg" height="25" alt="" className="image-2" />
            <div className="total-earned-amount">154,493 TRX Earned</div>
            <div className="w-embed" />
          </div>
        </div>
      </div>
      <div className="refer-a-friend-background" />
    </div>
  );
}
