import React, { useState } from 'react';
import classNames from 'classnames';

import SearchForm from './SearchForm';
import Filters from './Filters';
import Dropdown from './Dropdown';
import './styles.scss';

export default function Header() {
  const [state, setState] = useState({
    showFilters: true,
  });
  const toggleFilters = () => {
    setState({
      showFilters: !state.showFilters,
    });
  };

  return (
    <div className="search-wrapper">
      <SearchForm toggleFilters={toggleFilters} />
      <div
        data-w-id="3a5b6ca4-6cdb-a329-f2ef-116ae677d563"
        className={classNames('filters-wrapper', {
          hide: !state.showFilters,
        })}
      >
        <div id="w-node-874e90fea642-9acf37c8" className="numbers-of-items">
          9 items{' '}
        </div>
        <Filters />
        <Dropdown />
      </div>
    </div>
  );
}
