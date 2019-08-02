import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from 'containers/App/actions';

import Info from './Info';
import Activities from './Activities';

import '!file-loader?name=[name].[ext]!../../images/sale-icon-with-bg.svg';
import '!file-loader?name=[name].[ext]!../../images/breed-icon-with-bg.png';
import '!file-loader?name=[name].[ext]!../../images/request-icon-with-bg.svg';
import '!file-loader?name=[name].[ext]!../../images/open-chest-icon-with-bg.svg';
import '!file-loader?name=[name].[ext]!../../images/closed-chest-icon-with-bg.svg';
import '!file-loader?name=[name].[ext]!../../images/opened-egg-icon-with-bg.svg';

function Activity({ onLogout }) {
  return (
    <div className="section activity-section">
      <div className="container">
        <Info
          profileName="Elliot T. Wainman"
          profileImage="/avatar_1avatar.jpg"
          logout={onLogout}
        />
        <h2 className="activity-tab">Activity</h2>
        <Activities />
      </div>
    </div>
  );
}

Activity.propTypes = {
  onLogout: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLogout: e => {
      e.preventDefault();
      dispatch(logout());
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Activity);
