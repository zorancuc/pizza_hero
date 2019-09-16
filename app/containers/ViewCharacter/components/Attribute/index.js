import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Attribute({ image, name, percent, bgClass }) {
  return (
    <div className={classNames('attribute', bgClass || '')}>
      <img src={image} alt="" className="att-icon" />
      <div className="att-name">{name}</div>
      <div className="att-percent-wrapper">
        <div className="text-block-8">{percent}%</div>
      </div>
    </div>
  );
}

Attribute.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  percent: PropTypes.number,
  bgClass: PropTypes.string,
};
