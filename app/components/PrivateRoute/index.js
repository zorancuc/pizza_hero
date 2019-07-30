import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLogged } from 'containers/App/selectors';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, isLogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLogged === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool,
  component: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isLogged: makeSelectIsLogged(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(PrivateRoute);
