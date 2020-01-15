import React, { memo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changeSort } from '../../actions';

export function Dropdown({ onChangeSort }) {
  const [state, setState] = useState({
    showDropdown: false,
    selectedMenu: 'Most Recent',
  });
  const toggleDropdown = () => {
    setState({
      ...state,
      showDropdown: !state.showDropdown,
    });
  };
  const closeDropdown = () => {
    setState({
      ...state,
      showDropdown: false,
    });
  };
  const selectMenu = menu => e => {
    e.preventDefault();
    setState({
      ...state,
      selectedMenu: menu,
      showDropdown: false,
    });

    onChangeSort(menu);
  };

  return (
    <div
      data-delay="0"
      id="w-node-bcb002c8ce21-9acf37c8"
      className="dropdown-2 w-dropdown"
    >
      <OutsideClickHandler onOutsideClick={closeDropdown}>
        <div
          onClick={toggleDropdown}
          className="sorting-dropdown-toggle w-dropdown-toggle"
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
        >
          <div className="down-arrow-icon w-icon-dropdown-toggle" />
          <div>{state.selectedMenu}</div>
        </div>
        {state.showDropdown && (
          <nav className="sorting-dropdown-list w-dropdown-list w--open">
            <a
              href="/#"
              className={classNames('dropdown-link', 'w-dropdown-link', {
                'w--current': state.selectedMenu === 'Most Recent',
              })}
              onClick={selectMenu('Most Recent')}
            >
              Most Recent
            </a>
            <a
              href="/#"
              className={classNames('dropdown-link', 'w-dropdown-link', {
                'w--current': state.selectedMenu === 'Most Early',
              })}
              onClick={selectMenu('Most Early')}
            >
              Most Early
            </a>
            <a
              href="/#"
              className={classNames('dropdown-link', 'w-dropdown-link', {
                'w--current': state.selectedMenu === 'Price High to Low',
              })}
              onClick={selectMenu('Price High to Low')}
            >
              Price High to Low
            </a>
            <a
              href="/#"
              className={classNames('dropdown-link', 'w-dropdown-link', {
                'w--current': state.selectedMenu === 'Price Low to High',
              })}
              onClick={selectMenu('Price Low to High')}
            >
              Price Low to High
            </a>
          </nav>
        )}
      </OutsideClickHandler>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSort: searchStr => {
      dispatch(changeSort(searchStr));
    },
  };
}

Dropdown.propTypes = {
  onChangeSort: PropTypes.func,
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Dropdown);
