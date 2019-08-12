import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ toggleFilters }) {
  const toggleFilter = e => {
    e.preventDefault();
    toggleFilters();
  };
  return (
    <form action="/search" className="search w-form">
      <div className="search-field-wrapper">
        <input
          type="search"
          className="search-input w-input"
          maxLength="256"
          name="query"
          placeholder="Search"
          id="search"
          required=""
        />
        <input
          type="submit"
          value="Search"
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
          src="https://storage.cloud.google.com/geometric-watch-246204.appspot.com/images/filters-icon.svg"
          alt=""
          className="filters-icon"
        />
        <div className="text-block-3">filter</div>
      </a>
    </form>
  );
}

SearchForm.propTypes = {
  toggleFilters: PropTypes.func,
};
