import React from 'react';

import Item from './Item';

export default function ItemDetails() {
  return (
    <div className="item-details">
      <Item title="Hero" image="/hero-icon-white.svg" />
      <Item title="Male" image="/male-icon-white.svg" />
      <Item title="1245131" />
      <Item title="Gen 5" image="/dna-icon-white.svg" />
      <Item title="Sluggish Cooldown" image="/clock-icon-white.svg" />
    </div>
  );
}
