import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function GearItem({ image, isEmpty, isHand }) {
  return (
    <a
      href="/#"
      className={classnames('w-inline-block', {
        'item-button': !isEmpty,
        'view-without-items-button': isEmpty,
        hand: isHand,
      })}
    >
      {!isEmpty && <img src={image} alt="" className="equipment-image" />}
      {isEmpty && <img src="/cancel-icon.svg" alt="" className="cancel-icon" />}
      {isEmpty && <div>View without items</div>}
    </a>
  );
}

GearItem.propTypes = {
  image: PropTypes.string,
  isEmpty: PropTypes.bool,
  isHand: PropTypes.bool,
};
