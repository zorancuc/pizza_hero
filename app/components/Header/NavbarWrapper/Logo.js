import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Logo({ id }) {
  return (
    <Link
      id={id}
      data-w-id="f0ab1070-570f-ab2c-44f4-22521a87e912"
      to="/"
      className="pizza-heroes-logo-link-wrapper w-inline-block w--current"
    >
      <img
        src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/pizza-heroes-logo.png"
        width="149"
        alt=""
        className="pizza-heroes-logo"
      />
    </Link>
  );
}

Logo.propTypes = {
  id: PropTypes.string,
};
