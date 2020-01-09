import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changeSearchStr } from '../../actions';

export function SearchForm({ onChangeSearchStr }) {
  const [state, setState] = useState({
    searchStr: '',
  });

  const handleInputChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFilter = e => {
    e.preventDefault();
    console.log(state.searchStr);
    onChangeSearchStr(state.searchStr);
    // toggleFilters();
  };
  return (
    <form action="/search" className="search w-form">
      <div className="search-field-wrapper">
        <input
          type="search"
          className="search-input w-input"
          maxLength="256"
          name="searchStr"
          placeholder="Search"
          id="search"
          required=""
          onChange={handleInputChange}
          value={state.searchStr}
        />
        <input
          type="submit"
          value="Search"
          onClick={toggleFilter}
          className="search-button w-button"
        />
      </div>
      <a
        onClick={toggleFilter}
        data-w-id="94bc45d6-35ef-1e54-4a9d-b83d9a13fbe1"
        href="/#"
        className="filters-button w-inline-block"
      >
        <img
          src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/filters-icon.svg"
          alt=""
          className="filters-icon"
        />
        <div className="text-block-3">filter</div>
      </a>
    </form>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchStr: searchStr => {
      dispatch(changeSearchStr(searchStr));
    },
  };
}

SearchForm.propTypes = {
  onChangeSearchStr: PropTypes.func,
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SearchForm);
