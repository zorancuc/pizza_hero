import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from 'containers/App/actions';

import Info from './Info';
import Activities from './Activities';

function Activity({ onLogout }) {
  return (
    <div className="section activity-section">
      <div className="container">
        <Info
          profileName="Elliot T. Wainman"
          profileimage="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/avatar_1avatar.jpg"
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
