import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';
import { makeSelectLocation } from 'containers/App/selectors';

function SubMenu({ location, id }) {
  const { pathname } = location;
  return (
    <div id={id} className="sub-menu-wrapper">
      <Link
        to="/"
        className={classNames('sub-menu-link', 'w-inline-block', {
          'w--current': pathname === '/',
        })}
      >
        <div className="sub-menu-text">pre-order</div>
      </Link>
      <Link
        to="/my-inventory"
        className={classNames('sub-menu-link', 'w-inline-block', {
          'w--current': pathname === '/my-inventory',
        })}
      >
        <div className="sub-menu-text">my inventory</div>
      </Link>
      <Link
        to="/guides"
        className={classNames(
          'sub-menu-link',
          'w-inline-block',
          'last-sub-menu-item',
          { 'w--current': pathname === '/guides' },
        )}
      >
        <div className="sub-menu-text">guides</div>
      </Link>
    </div>
  );
}

SubMenu.propTypes = {
  location: PropTypes.object,
  id: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(SubMenu);
