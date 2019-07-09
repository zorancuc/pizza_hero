import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ContentItem({
  title,
  subtitle,
  image,
  content,
  align,
}) {
  return (
    <div
      className={classNames('about-slide', {
        left: align === 'left',
        right: align === 'right',
      })}
    >
      <div className="about-slide-content">
        <img src={image} alt="" className="about-slide-icon" />
        <h3 className="about-slide-title">{title}</h3>
        {subtitle && <h5 className="about-slide-subtitle">{subtitle}</h5>}
        <p className="about-slide-blurb">{content}</p>
      </div>
    </div>
  );
}

ContentItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  align: PropTypes.string,
};
