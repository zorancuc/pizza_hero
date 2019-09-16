import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ title, image }) {
  return (
    <div className="item-detail">
      <div className="detail-icon-wrapper">
        {image && <img src={image} alt="" className="character-detail-icon" />}
        {!image && <div className="number-icon">#</div>}
      </div>
      <div className="item-detail-text">{title}</div>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
