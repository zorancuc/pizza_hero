import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { chest } from 'utils/tronsc';

import './styles.scss';

export default function Inventory({ image, icon, type, empty, id }) {
  const clickInventory = async e => {
    e.preventDefault();
    console.log(id);
    await chest.openChest(id);
  };

  return (
    <div>
      {!empty && (
        <a
          href="/#"
          onClick={clickInventory}
          className={classNames('item', 'w-inline-block', type)}
        >
          <div className="item-image-wrapper">
            {image && <img src={image} alt="" className="item-image" />}
            <div className="category-icon-wrapper">
              <img src={icon} alt="" className="category-icon" />
            </div>
          </div>
          <div className="item-tooltip">
            <div className="item-type">
              <span className="legendary">Legendary</span> | Item
            </div>
            <div className="item-name">Skullhunter Mask</div>
            <div className="tooltip-arrow" />
          </div>
        </a>
      )}
      {empty && <div className="item empty" />}
    </div>
  );
}

Inventory.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  empty: PropTypes.bool,
  id: PropTypes.number,
};
