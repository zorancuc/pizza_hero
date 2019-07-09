import React from 'react';

import Rarities from './Rarities';
import SuperHeroes from './SuperHeroes';
import Collectibles from './Collectibles';

export default function ItemRarities() {
  return (
    <div className="section item-rarities-section">
      <div className="container">
        <Rarities />
        <SuperHeroes />
        <Collectibles />
      </div>
    </div>
  );
}
