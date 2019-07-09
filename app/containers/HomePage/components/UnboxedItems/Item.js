import React from 'react';
import PropTypes from 'prop-types';

export default function Item({
  image,
  unboxedItemId,
  rarity,
  generation,
  chance,
  timestamp,
}) {
  return (
    <div className="slide w-slide">
      <div className="unboxed-item-wrapper">
        <img src={image} alt="" className="unboxed-item-image" />
        <div className="unboxed-item-id">{unboxedItemId}</div>
        <div className="item-info-wrapper">
          <div className="rarity blue-text">{rarity}</div>
          <div className="separator">/</div>
          <div className="generation">Gen {generation}</div>
          <div className="separator">/</div>
          <div className="chance">{chance}% Chance</div>
        </div>
        <div className="timestamp">{timestamp} ago</div>
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
