import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Rarity({ name, color, image, percentage }) {
  return (
    <div className="item-rarity-wrapper">
      <img src={image} alt="" className="rarity-gem-image" />
      <div className="gold-divider" />
      <div className="gold-divider-part-2" />
      <div className={classNames('item-rarity-name', color)}>{name}</div>
      <div className="percentage">{percentage}%</div>
    </div>
  );
}

Rarity.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  percentage: PropTypes.number,
};
