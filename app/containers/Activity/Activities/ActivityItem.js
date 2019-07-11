import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ActivityItem({ image, timeStamp, detail, detailTo }) {
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
      <Link to={`/${detailTo}`} className="view-details-button w-inline-block">
        <div>View Details</div>
      </Link>
    </div>
  );
}

ActivityItem.propTypes = {
  image: PropTypes.string,
  timeStamp: PropTypes.string,
  detail: PropTypes.object,
  detailTo: PropTypes.string,
};
