import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import accounting from 'accounting';

export default function Attribute({ image, name, percent }) {
  return (
    <div
      className={cx('attribute', {
        '': percent >= 50,
        hawaiian: percent < 50 && percent >= 20,
        margarita: percent < 20 && percent >= 7,
        cow: percent < 7 && percent >= 3,
        saucy: percent < 3 && percent >= 0,
      })}
    >
      <img src={image} alt="" className="att-icon" />
      <div className="att-name">{name}</div>
      {/* <div className="att-percent-wrapper">
        <div className="text-block-8">
          {accounting.formatNumber(percent, 2, ',')}%
        </div>
      </div> */}
    </div>
  );
}

Attribute.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  percent: PropTypes.number,
  // bgClass: PropTypes.string,
};
