import React from 'react';

export default function Referral() {
  return (
    <div className="section referral-section">
      <div className="container">
        <div className="columns w-row">
          <div className="column-2 w-col w-col-6">
            <h4 className="invite-friends-and-save-title">
              Play and trade with digital collectibles.
            </h4>
            <div className="referral-blurb">
              Share your link and receive 10% in EVO from all the chest
              purchases from your link. The purchaser will also receive 10% back
              in ZA Coins.
            </div>
          </div>
          <div className="column w-col w-col-6">
            <div className="main-referral-link-wrapper">
              <img
                src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/link.svg"
                width="15"
                alt=""
                className="image"
              />
              <div className="referral-link">
                https://pizzaheroes.com/?r=5NST612897be1
              </div>
              <a href="/#" className="copy-referral-link-button w-inline-block">
                <div>copy</div>
              </a>
              <div className="link-overlay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
