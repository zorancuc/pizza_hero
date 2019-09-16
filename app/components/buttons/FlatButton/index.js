import React from 'react';
import PropTypes from 'prop-types';

export default function FlatButton({ image, children }) {
  return (
    <a href="/#" className="item-interact-button-b w-inline-block">
      <img src={image} width="20" alt="" className="image-4" />
      <div>{children}</div>
    </a>
  );
}

FlatButton.propTypes = {
  image: PropTypes.string,
  children: PropTypes.any,
};
