import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import Filters from './Filters';
import Dropdown from './Dropdown';
import './styles.scss';

export default function Header({ currentTab, inventories }) {
  const [state, setState] = useState({
    showFilters: true,
    balance: 0,
  });
  const toggleFilters = () => {
    setState({
      showFilters: !state.showFilters,
    });
  };

  useEffect(() => {
    console.log('HEADERHEADERHEADERHEADERHEADERHEADERHEADER');
    console.log(currentTab);
    console.log(inventories);
    switch (currentTab) {
      case 'all':
        setState({
          ...state,
          balance:
            inventories.chest.length +
            inventories.gear.length +
            inventories.emotion.length +
            inventories.egg.length +
            inventories.hero.length,
        });
        break;
      case 'heroes':
        setState({
          ...state,
          balance: inventories.egg.length + inventories.hero.length,
        });
        break;
      case 'gear':
        setState({
          ...state,
          balance: inventories.gear.length,
        });
        break;
      case 'emotes':
        setState({
          ...state,
          balance: inventories.emotion.length,
        });
        break;
      case 'chest':
        setState({
          ...state,
          balance: inventories.chest.length,
        });
        break;
      default:
        break;
    }
  }, [currentTab, inventories]);
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
          {state.balance} items{' '}
        </div>
        <Filters />
        <Dropdown />
      </div>
    </div>
  );
}

Header.propTypes = {
  currentTab: PropTypes.string,
  inventories: PropTypes.object,
};
