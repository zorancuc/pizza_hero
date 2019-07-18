import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import classNames from 'classnames';

export default function Dropdown() {
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
                'w--current': state.selectedMenu === 'Most Relevant',
              })}
              onClick={selectMenu('Most Relevant')}
            >
              Most Relevant
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
