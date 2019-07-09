import React from 'react';
import FeatureItem from './FeatureItem';

export default function Features() {
  return (
    <div className="section features-section">
      <div className="container">
        <h2 className="game-features-title">Game Features</h2>
        <div className="features-main-wrapper">
          <FeatureItem
            title="Breeding"
            description="Quick description about this feature right here. And it will go up to three lines if needed."
            image="/breeding_1breeding.png"
            date="Q2 2019"
          />
          <FeatureItem
            title="Treasure Huntin&#x27;"
            description="Quick description about this feature right here. And it will go up to three lines if needed."
            image="/treasure_1treasure.png"
            date="Q2 2019"
          />
          <FeatureItem
            title="Crafting"
            description="Quick description about this feature right here. And it will go up to three lines if needed."
            image="/crafting_1crafting.png"
            date="Q2 2019"
          />
          <FeatureItem
            title="Guilds"
            description="Quick description about this feature right here. And it will go up to three lines if needed."
            image="/guilds_1guilds.png"
            date="Q2 2019"
          />
          <FeatureItem
            title="Marketplace"
            description="Quick description about this feature right here. And it will go up to three lines if needed."
            image="/marketplace_1marketplace.png"
            date="Q2 2019"
          />
          <FeatureItem
            title="Upgrade System"
            description="Quick description about this feature right here. And it will go up to three lines if needed."
            image="/upgrades_1upgrades.png"
            date="Q2 2019"
          />
          <FeatureItem
            title="Season Passes"
            description="Quick description about this feature right here. And it will go up to three lines if needed."
            image="/season_1season.png"
            date="Q2 2019"
          />
        </div>
      </div>
    </div>
  );
}
