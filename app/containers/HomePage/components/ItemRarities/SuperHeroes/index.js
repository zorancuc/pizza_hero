import React from 'react';

import Hero from './Hero';
import './styles.scss';

export default function SuperHeroes() {
  return (
    <div>
      <h2 className="super-heroes-title">Super Heroes!</h2>
      <h4 className="super-heroes-info">
        These limited-edition Heroes boast special visuals and stats. They can
        only be discovered through a unique genetic recipe until the cap is
        reached
        <br />
      </h4>
      <div className="super-heroes-main-wrapper">
        <Hero
          name="Bee-yonce"
          image="/unboxed-item.png"
          rarity="Heirloom"
          generation={0}
          chance={0.001}
        />
        <Hero
          name="Justin Beaver"
          image="/unboxed-item.png"
          rarity="Heirloom"
          generation={0}
          chance={0.0006}
        />
        <Hero
          name="Not Yet Discovered!"
          image="/unboxed-item.png"
          notDiscovered
          last
        />
      </div>
    </div>
  );
}
