import React from 'react';

import './styles.scss';
import ContentItem from './ContentItem';
import Header from './Header';

export default function About() {
  return (
    <div className="section what-is-pizza-heroes-section">
      <div className="what-is-pizza-heroes-container">
        <Header />
        <ContentItem
          title="Blockchain Collectible"
          image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/blockchain-icon_1blockchain-icon.png"
          content="Characters and items are NFT&#x27;s stored on the Tron blockchain as TRC721 tokens."
          align="left"
        />
        <ContentItem
          title="Video Games"
          image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/activities-icon_1activities-icon.png"
          content="Play with your character and adventure in an open world action RPG video game."
          align="right"
        />
        <ContentItem
          title="Rare Items &amp; Marketplace"
          image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/rare-items-icon_1rare-items-icon.png"
          content="Unbox an exclusive item or even a Super Hero!. List and find rare items in our marketplace."
          align="left"
        />
        <ContentItem
          title="Earn TRX"
          subtitle="(Activities &amp; Marketplace)"
          image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/trx-icon_1trx-icon.png"
          content="By doing activities you will earn TRX. 10% of all item shop sales
          goes back to the community activities. List your items and
          characters on the marketplace to earn more TRX."
          align="right"
        />
      </div>
    </div>
  );
}
