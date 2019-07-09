import React from 'react';

import './styles.scss';

export default function Collectibles() {
  return (
    <div className="collectibles-wrapper">
      <h2 className="collectibles-title">Collectibles &amp; Marketplace</h2>
      <h4 className="collectibles-info">
        No more churning through hundreds of packs looking for that last hero to
        complete your collection. Buy and sell heroes, chests, and more with
        other players, or trade amongst your friends - we can’t stop you.
        Powered by the Tron Network, ownership history and scarcity are
        permanently etched into the blockchain for all to witness.
        <br />
        <br />
        We will never compete with player-sold heroes: once we stop selling an
        item it can only be acquired through the player marketplace.
        <br />
      </h4>
      <a href="/#" className="get-started-button-wrapper w-inline-block">
        <div className="button-gradient">
          <div className="discover-text">get started</div>
        </div>
      </a>
    </div>
  );
}
