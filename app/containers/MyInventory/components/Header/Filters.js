import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { changeSireFilter, changeSaleFilter } from '../../actions';

export function Filters({ onChangeSireFilter, onChangeSaleFilter }) {
  const [state, setState] = useState({
    sireFlag: 0,
    saleFlag: 0,
  });

  const handleInputChange = e => {
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: 1 - e.target.value,
    });

    if (e.target.name === 'saleFlag') {
      onChangeSaleFilter(1 - e.target.value);
    } else if (e.target.name === 'sireFlag') {
      onChangeSireFilter(1 - e.target.value);
    }
  };

  return (
    <div id="w-node-6a9f48da1afe-9acf37c8" className="form-block-2 w-form">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        className="form"
      >
        <label className="w-checkbox checkbox-field">
          <input
            type="checkbox"
            id="for sale"
            data-name="for sale"
            className="w-checkbox-input"
            value={state.saleFlag}
            name="saleFlag"
            onChange={handleInputChange}
          />
          <span htmlFor="for sale" className="checkbox-label w-form-label">
            for sale
          </span>
        </label>
        <label className="w-checkbox checkbox-field">
          <input
            type="checkbox"
            id="for sire"
            name="sireFlag"
            data-name="for sire"
            className="w-checkbox-input"
            value={state.sireFlag}
            onChange={handleInputChange}
          />
          <span htmlFor="for sire" className="checkbox-label w-form-label">
            for sire
          </span>
        </label>
        <label className="w-checkbox checkbox-field">
          <input
            type="checkbox"
            id="other"
            name="other"
            data-name="other"
            className="w-checkbox-input"
          />
          <span htmlFor="other" className="checkbox-label w-form-label">
            other
          </span>
        </label>
      </form>
      <div className="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div className="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSireFilter: sireFlag => {
      dispatch(changeSireFilter(sireFlag));
    },
    onChangeSaleFilter: saleFlag => {
      dispatch(changeSaleFilter(saleFlag));
    },
  };
}

Filters.propTypes = {
  onChangeSireFilter: PropTypes.func,
  onChangeSaleFilter: PropTypes.func,
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Filters);
