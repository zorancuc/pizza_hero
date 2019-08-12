import React from 'react';

import Rarity from './Rarity';
import './styles.scss';

export default function Rarities() {
  return (
    <div>
      <h2 className="item-rarities-title">Item Rarities</h2>
      <div className="item-rarities-main-wrapper">
        <Rarity
          name="Heirloom"
          image="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/heirloom_1heirloom.png"
          percentage={0.001}
        />
        <Rarity
          name="Legendary"
          color="yellow"
          image="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/legendary_1legendary.png"
          percentage={1}
        />
        <Rarity
          name="Epic"
          color="purple"
          image="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/epic_1epic.png"
          percentage={5}
        />
        <Rarity
          name="Rare"
          color="blue"
          image="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/rare_1rare.png"
          percentage={20}
        />
        <Rarity
          name="Uncommon"
          color="green"
          image="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/uncommon_1uncommon.png"
          percentage={30}
        />
        <Rarity
          name="Uncommon"
          color="grey"
          image="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/common_1common.png"
          percentage={44}
        />
      </div>
    </div>
  );
}
