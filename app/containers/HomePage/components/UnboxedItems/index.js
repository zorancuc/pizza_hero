import React from 'react';

import Item from './Item';

export default function UnboxedItems() {
  return (
    <div class="section latest-unboxed-items-section">
      <div class="container">
        <h2 data-text="pre-sale exclusive" class="latest-unboxed-items-heading">Latest Unboxed Items</h2>
        <div data-animation="slide" data-hide-arrows="1" data-duration="500" data-infinite="1" class="slider w-slider">
          <div class="mask w-slider-mask">
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="3 minutes"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="5 minutes"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="10 minutes"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="15 minutes"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="20 minutes"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="30 minutes"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="45 minutes"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="1 hour"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="2 hours"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="3 hours"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="5 hours"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="2 hours"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="1 day"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="2 days"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="3 days"
            />
            <Item
              image="/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="1 week"
            />
          </div>
          <div class="slider-arrow-wrapper left w-slider-arrow-left">
            <div class="slider-arrow-icon w-icon-slider-left"></div>
          </div>
          <div class="slider-arrow-wrapper w-slider-arrow-right">
            <div class="slider-arrow-icon w-icon-slider-right"></div>
          </div>
          <div class="slide-nav w-slider-nav w-round"></div>
        </div>
      </div>
    </div>
  );
}
