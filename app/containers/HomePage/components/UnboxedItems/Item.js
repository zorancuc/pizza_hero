import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ image, unboxedItemId, rarity, generation, chance, timestamp }) {
  return (
    <div class="slide w-slide">
      <div class="unboxed-item-wrapper">
        <img src={image} alt="" class="unboxed-item-image" />
        <div class="unboxed-item-id">{unboxedItemId}</div>
        <div class="item-info-wrapper">
          <div class="rarity blue-text">{rarity}</div>
          <div class="separator">/</div>
          <div class="generation">Gen {generation}</div>
          <div class="separator">/</div>
          <div class="chance">{chance}% Chance</div>
        </div>
        <div class="timestamp">{timestamp} ago</div>
      </div>
    </div>
  );
}

Item.propTypes = {
  image: PropTypes.string,
  unboxedItemId: PropTypes.string,
  rarity: PropTypes.string,
  generation: PropTypes.number,
  chance: PropTypes.number,
  timestamp: PropTypes.string,
};
