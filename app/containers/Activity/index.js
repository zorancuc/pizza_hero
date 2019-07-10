import React from 'react';

import Info from './Info';
import Activities from './Activities';

import '!file-loader?name=[name].[ext]!../../images/sale-icon-with-bg.svg';
import '!file-loader?name=[name].[ext]!../../images/breed-icon-with-bg.png';
import '!file-loader?name=[name].[ext]!../../images/request-icon-with-bg.svg';
import '!file-loader?name=[name].[ext]!../../images/open-chest-icon-with-bg.svg';
import '!file-loader?name=[name].[ext]!../../images/closed-chest-icon-with-bg.svg';
import '!file-loader?name=[name].[ext]!../../images/opened-egg-icon-with-bg.svg';

export default function Activity() {
  return (
    <div className="section activity-section">
      <div className="container">
        <Info
          profileName="Elliot T. Wainman"
          profileImage="/avatar_1avatar.jpg"
        />
        <h2 className="activity-tab">Activity</h2>
        <Activities />
      </div>
    </div>
  );
}
