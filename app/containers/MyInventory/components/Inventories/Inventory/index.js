import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

export default function Inventory({ image, icon, type, empty }) {
  return (
    <div>
      {!empty &&
        <a href="#" className={classNames('item', 'w-inline-block', type)}>
        <div className="item-image-wrapper">
          {image && <img src={image} alt="" className="item-image" />}
          <div className="category-icon-wrapper">
            <img src={icon} alt="" className="category-icon" />
          </div>
        </div>
        <div className="item-tooltip">
          <div className="item-type"><span className="legendary">Legendary</span> | Item</div>
          <div className="item-name">Skullhunter Mask</div>
          <div className="tooltip-arrow"></div>
        </div>
      </a>
      }
      {empty && <div className="item empty" />}
    </div>
  );
}

Inventory.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  empty: PropTypes.bool,
};
