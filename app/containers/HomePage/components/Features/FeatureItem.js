import React from 'react';
import PropTypes from 'prop-types';

export default function FeatureItem({ title, description, image, date }) {
  return (
    <div className="feature-wrapper">
      <div className="feature-image-wrapper">
        <img src={image} alt="" className="feature-image" />
      </div>
      <h3 className="feature-name">{title}</h3>
      <div className="feature-description">{description}</div>
      <div className="shipping-date">{date}</div>
    </div>
  );
}

FeatureItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
};
