import React from 'react';
import PropTypes from 'prop-types';

export default function ActivityItem({ image, timeStamp, detail }) {
  return (
    <div className="activity-item">
      <div className="activity-info">
        <div className="activity-image">
          <img src={image} alt="" />
        </div>
        <div className="activity-details">
          <div className="activity-time-stamp">{timeStamp}</div>
          {detail}
        </div>
      </div>
      <a href="view-item.html" className="view-details-button w-inline-block">
        <div>View Details</div>
      </a>
    </div>
  );
}

ActivityItem.propTypes = {
  image: PropTypes.string,
  timeStamp: PropTypes.string,
  detail: PropTypes.object,
};
