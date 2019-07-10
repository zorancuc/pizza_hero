import React from 'react';
import PropTypes from 'prop-types';

export default function Info({ profileName, profileImage }) {
  return (
    <div className="activity-info-header">
      <div className="user-title-info">
        <div className="profile-image">
          <img src={profileImage} alt="" />
        </div>
        <div className="account-info">
          <h3 className="profile-name">{profileName}</h3>
          <div className="account-links">
            <a href="/#" className="account-link">
              Copy address
            </a>
            <div className="hyphen">-</div>
            <a href="settings.html" className="account-link">
              Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Info.propTypes = {
  profileName: PropTypes.string,
  profileImage: PropTypes.string,
};
