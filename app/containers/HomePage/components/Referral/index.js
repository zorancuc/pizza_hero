import React from 'react';

export default function Referral() {
  return (
    <div class="section referral-section">
      <div class="container">
        <div class="columns w-row">
          <div class="column-2 w-col w-col-6">
            <h4 class="invite-friends-and-save-title">Play and trade with digital collectibles.</h4>
            <div class="referral-blurb">Share your link and receive 10% in EVO from all the chest purchases from your link. The purchaser will also receive 10% back in ZA Coins.</div>
          </div>
          <div class="column w-col w-col-6">
            <div class="main-referral-link-wrapper">
              <img src="/link.svg" width="15" alt="" class="image" />
              <div class="referral-link">https://pizzaheroes.com/?r=5NST612897be1</div>
              <a href="#" class="copy-referral-link-button w-inline-block">
                <div>copy</div>
              </a>
              <div class="link-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
